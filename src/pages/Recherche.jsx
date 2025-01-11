import { Link } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';

function Recherche() {
  const { query, results, handleQueryChange, handleSearch } = useSearch();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Recherche de Films</h1>
        
        <div className="max-w-xl mx-auto mb-12">
          <div className="flex shadow-sm">
            <input
              type="text"
              placeholder="Rechercher un film..."
              className="flex-1 px-6 py-4 text-gray-700 bg-white border-2 border-indigo-100 rounded-xl focus:outline-none focus:border-indigo-300 transition duration-200"
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {results.map(film => (
            <div 
              key={film.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[2/3]">
                {film.poster_path ? (
                  <img 
                    src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} 
                    alt={film.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Pas d'image</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{film.title}</h2>
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
        
        {results.length === 0 && query && (
          <div className="text-center text-gray-500 mt-8">
            Aucun résultat trouvé pour "{query}"
          </div>
        )}
      </div>
    </div>
  );
}

export default Recherche;