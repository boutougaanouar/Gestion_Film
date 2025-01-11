import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetailsFilm() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
      .then(res => res.json())
      .then(data => {
        setFilm(data);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!film) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3">
            <div className="relative h-[500px] lg:h-full">
              <img 
                className="absolute inset-0 w-full h-full object-cover"
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} 
                alt={film.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden"></div>
            </div>
          </div>
          
          <div className="lg:w-2/3 p-8 lg:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{film.title}</h1>
            <p className="text-lg italic text-gray-600 mb-6">{film.tagline}</p>
            
            <div className="prose max-w-none text-gray-700 mb-8">
              <p className="text-lg leading-relaxed">{film.overview}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Détails de Production</h3>
                  <p className="mt-2"><span className="font-medium">Studios:</span> {film.production_companies.map(company => company.name).join(', ')}</p>
                  <p className="mt-1"><span className="font-medium">Pays:</span> {film.production_countries.map(country => country.name).join(', ')}</p>
                  <p className="mt-1"><span className="font-medium">Langues:</span> {film.spoken_languages.map(lang => lang.name).join(', ')}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Statistiques</h3>
                  <p className="mt-2"><span className="font-medium">Popularité:</span> {film.popularity.toFixed(1)}</p>
                  <p className="mt-1"><span className="font-medium">Statut:</span> {film.status}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Informations Financières</h3>
                  <p className="mt-2">
                    <span className="font-medium">Budget:</span> {' '}
                    {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'USD' }).format(film.budget)}
                  </p>
                  <p className="mt-1">
                    <span className="font-medium">Revenus:</span> {' '}
                    {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'USD' }).format(film.revenue)}
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 text-xs font-semibold text-white bg-indigo-600 rounded-full">
                    {film.adult ? '18+' : 'Tout public'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsFilm;