import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-8">
      <div className="container-custom text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">🏥</span>
            </div>
            <span className="text-lg font-semibold">Hospital das Clínicas</span>
          </div>
          <p className="text-white/80 text-sm md:text-base">
            &copy; 2025 - Jornada Digital IMREA | Grupo FIAP
          </p>
          <div className="flex items-center space-x-4 text-xs md:text-sm text-white/60">
            <span>Desenvolvido com ❤️ para democratizar o acesso à saúde digital</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
