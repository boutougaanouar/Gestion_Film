import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <header className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
                            Gestionnaire Films
                        </h1>
                    </div>
                    
                    <nav className="hidden md:flex space-x-8 items-center">
                        <Link 
                            to="/" 
                            className={`px-3 py-2 text-sm font-medium rounded-md transition duration-150 ease-in-out
                                ${isActive('/') 
                                    ? 'bg-indigo-700 text-white' 
                                    : 'text-indigo-100 hover:bg-indigo-700 hover:text-white'}`}
                        >
                            Accueil
                        </Link>
                        <Link 
                            to="/recherche" 
                            className={`px-3 py-2 text-sm font-medium rounded-md transition duration-150 ease-in-out
                                ${isActive('/recherche') 
                                    ? 'bg-indigo-700 text-white' 
                                    : 'text-indigo-100 hover:bg-indigo-700 hover:text-white'}`}
                        >
                            Recherche
                        </Link>
                        <Link 
                            to="/ajouter" 
                            className={`px-3 py-2 text-sm font-medium rounded-md transition duration-150 ease-in-out
                                ${isActive('/ajouter') 
                                    ? 'bg-indigo-700 text-white' 
                                    : 'text-indigo-100 hover:bg-indigo-700 hover:text-white'}`}
                        >
                            Ajouter un Film
                        </Link>
                    </nav>

                    {/* Menu mobile */}
                    <div className="md:hidden flex items-center">
                        <div className="flex space-x-4">
                            <Link 
                                to="/" 
                                className={`px-2 py-1 text-sm rounded-md ${isActive('/') ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`}
                            >
                                Accueil
                            </Link>
                            <Link 
                                to="/recherche" 
                                className={`px-2 py-1 text-sm rounded-md ${isActive('/recherche') ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`}
                            >
                                Recherche
                            </Link>
                            <Link 
                                to="/ajouter" 
                                className={`px-2 py-1 text-sm rounded-md ${isActive('/ajouter') ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`}
                            >
                                Ajouter
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;