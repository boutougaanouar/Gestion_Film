import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AjouterFilm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    overview: '',
    release_date: '',
    poster: null
  });
  const [previewUrl, setPreviewUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'poster' && files[0]) {
      setFormData(prev => ({
        ...prev,
        poster: files[0]
      }));
      // Créer l'URL de prévisualisation
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        setPreviewUrl(e.target.result);
      };
      fileReader.readAsDataURL(files[0]);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Ici, vous pouvez ajouter la logique pour envoyer les données à votre API
      console.log('Film ajouté:', formData);
      navigate('/');
    } catch (err) {
      setError('Une erreur est survenue lors de l\'ajout du film');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white py-8 px-6 shadow-xl rounded-2xl">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Ajouter un Nouveau Film
          </h1>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Titre
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Entrez le titre du film"
              />
            </div>

            <div>
              <label htmlFor="overview" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="overview"
                name="overview"
                required
                value={formData.overview}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Entrez la description du film"
              />
            </div>

            <div>
              <label htmlFor="release_date" className="block text-sm font-medium text-gray-700">
                Date de sortie
              </label>
              <input
                type="date"
                id="release_date"
                name="release_date"
                required
                value={formData.release_date}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="poster" className="block text-sm font-medium text-gray-700">
                Affiche du film
              </label>
              <div className="mt-2">
                <div 
                  className="relative flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-indigo-500 transition-colors duration-200"
                  style={{ minHeight: '300px' }}
                >
                  {previewUrl ? (
                    <div className="relative w-full h-full flex justify-center">
                      <img
                        src={previewUrl}
                        alt="Aperçu de l'affiche"
                        className="max-h-[280px] object-contain"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setPreviewUrl('');
                          setFormData(prev => ({ ...prev, poster: null }));
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 focus:outline-none"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2 text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="flex flex-col items-center text-sm text-gray-600">
                        <label
                          htmlFor="poster"
                          className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Télécharger une image</span>
                          <input
                            id="poster"
                            name="poster"
                            type="file"
                            accept="image/*"
                            onChange={handleChange}
                            className="sr-only"
                          />
                        </label>
                        <p className="text-xs text-gray-500 mt-2">PNG, JPG jusqu'a 10MB</p>
                      </div>
                    </div>
                  )}
                  <input
                    type="file"
                    id="poster"
                    name="poster"
                    accept="image/*"
                    onChange={handleChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="mr-4 px-6 py-3 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-3 border border-transparent rounded-xl text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  loading ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Ajout en cours...' : 'Ajouter le film'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AjouterFilm;
