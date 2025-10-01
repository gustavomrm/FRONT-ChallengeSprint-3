import React from 'react';
import { Link } from 'react-router-dom';
import { INTEGRANTES } from '../data/constants';

const IntegrantesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white py-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-shadow-lg">
              👥 INTEGRANTES DO GRUPO
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Conheça a equipe por trás deste projeto
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/" 
              className="btn-outline bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-blue-600"
            >
              🏠 INÍCIO
            </Link>
            <Link 
              to="/ajuda" 
              className="btn-outline bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-blue-600"
            >
              ❓ AJUDA
            </Link>
            <Link 
              to="/contato" 
              className="btn-outline bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-blue-600"
            >
              📞 CONTATO
            </Link>
          </nav>
        </div>
      </header>

      <main className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {INTEGRANTES.map((integrante) => (
              <div key={integrante.id} className="group">
                <div className="card-interactive bg-gradient-to-br from-white to-blue-50 border border-blue-100 h-full text-center group-hover:shadow-2xl transition-all duration-300">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-200 group-hover:border-blue-400 transition-colors duration-300">
                      <img 
                        src={integrante.image} 
                        alt={integrante.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">👨‍💻</span>
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="px-6 pb-6">
                    <h2 className="text-xl font-bold text-blue-800 mb-2 group-hover:text-blue-900">
                      {integrante.name}
                    </h2>
                    <h3 className="text-sm font-semibold text-blue-600 mb-4 bg-blue-100 rounded-full px-3 py-1 inline-block">
                      RM: {integrante.rm}
                    </h3>
                    
                    {/* Social Links */}
                    <div className="flex justify-center gap-3 mb-6">
                      <a 
                        href={integrante.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-outline text-sm py-2 px-4 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                      >
                        <span className="mr-2">🐙</span>GitHub
                      </a>
                      <a 
                        href={integrante.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-outline text-sm py-2 px-4 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                      >
                        <span className="mr-2">💼</span>LinkedIn
                      </a>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700">
                      {integrante.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default IntegrantesPage;
