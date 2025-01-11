import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchMovies = async (searchQuery) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
      }
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
      options
    );
    const data = await response.json();
    setResults(data.results);
  };

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
    if (newQuery.length >= 2) {
      searchMovies(newQuery);
    } else if (newQuery.length === 0) {
      setResults([]);
    }
  };

  return (
    <SearchContext.Provider value={{ query, results, handleQueryChange }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
