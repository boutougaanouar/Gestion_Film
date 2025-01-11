
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          {new Date().getFullYear()} Gestionnaire de Films. Tous droits réservés.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            À propos
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            Contact
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;