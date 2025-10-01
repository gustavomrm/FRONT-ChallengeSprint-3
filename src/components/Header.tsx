import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onOpenForm: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenForm }) => {
  return (
    <header className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
      
      {/* Content */}
      <div className="relative z-10 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-shadow-lg animate-fade-in">
            Bem-vindo(a) à Jornada Digital na Saúde!
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 animate-fade-in">
            Facilitamos seu acesso à teleconsulta com apoio e simplicidade. Este site foi criado para ajudar pessoas com
            pouca familiaridade digital a marcarem consultas online de forma simples, segura e rápida.
          </p>
          
          {/* Navigation */}
          <nav className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-8">
              <Link 
                to="/ajuda" 
                className="btn-outline bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                ❓ AJUDA
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
              <a 
                href="#hc" 
                className="btn-outline bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                🏥 SOBRE A HC
              </a>
              <Link 
                to="/integrantes" 
                className="btn-outline bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                👥 QUEM SOMOS
              </Link>
              <Link 
                to="/faq" 
                className="btn-outline bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                ❓ PERGUNTAS FREQUENTES
              </Link>
              <Link 
                to="/contato" 
                className="btn-outline bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                📞 CONTATO
              </Link>
            </div>
          </nav>
          
          {/* CTA Button */}
          <div className="animate-bounce-gentle">
            <button 
              onClick={onOpenForm} 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl md:text-2xl py-4 px-8 md:px-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 border-4 border-white/20 backdrop-blur-sm"
            >
              📞 MARCAR TELECONSULTA
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse-slow delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-white/10 rounded-full animate-pulse-slow delay-500"></div>
    </header>
  );
};

export default Header;
