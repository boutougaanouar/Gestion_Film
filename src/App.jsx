import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Recherche from './pages/Recherche';
import AjouterFilm from './pages/AjouterFilm';
import DetailsFilm from './pages/DetailsFilm';
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import { SearchProvider } from './context/SearchContext';

function App() {
  return (
    <SearchProvider>
      <div className="App min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 antialiased">
        <div className="max-w-full mx-auto">
          <NavBar />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
              <div className="p-6 sm:p-8 lg:p-10">
                <Routes>
                  <Route path="/" element={<Accueil />} />
                  <Route path="/recherche" element={<Recherche />} />
                  <Route path="/ajouter" element={<AjouterFilm />} />
                  <Route path="/film/:id" element={<DetailsFilm />} />
                </Routes>
              </div>
            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    </SearchProvider>
  );
}

export default App;