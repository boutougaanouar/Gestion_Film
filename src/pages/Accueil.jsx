import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Accueil() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
      }
    };

    fetch('https://api.themoviedb.org/3/movie/popular', options)
      .then(res => res.json())
      .then(data => {
        setFilms(data.results);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 tracking-tight">Films Populaires</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {films.map(film => (
          <div key={film.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="relative">
              <img 
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} 
                alt={film.title} 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20"/>
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">{film.title}</h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{film.overview}</p>
              <Link 
                to={`/film/${film.id}`} 
                className="inline-block w-full text-center bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
              >
                Voir les détails
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accueil;