import React from 'react';
import { Link } from 'react-router-dom';

const HelpPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white py-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-shadow-lg">
              ❓ AJUDA
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Estamos aqui para te ajudar em cada passo da sua jornada digital na saúde
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
              to="/faq" 
              className="btn-outline bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-blue-600"
            >
              ❓ PERGUNTAS FREQUENTES
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
          {/* Banner Section */}
          <section className="text-center mb-16">
            <div className="relative group">
              <img 
                src="/img/faixahc.png" 
                alt="Faixa HC" 
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </section>

          {/* Support Section */}
          <section className="max-w-4xl mx-auto">
            <div className="card-interactive bg-gradient-to-br from-white to-green-50 border border-green-200 text-center">
              <div className="text-6xl mb-6">🤝</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
                Precisa de suporte?
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  Se você chegou até aqui, é porque algo despertou seu interesse — e isso já é o começo de uma boa conversa. Nosso contato vai muito além de uma simples troca de 
                  mensagens. Aqui, cada palavra importa, cada dúvida é bem-vinda, e cada ideia tem espaço para crescer.
                </p>
                <p className="text-xl font-semibold text-green-700">
                  📩 Fale com a gente! Estamos a um clique de distância.
                </p>
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/contato" 
                  className="btn-accent text-xl py-4 px-8 shadow-xl hover:shadow-2xl-green transform hover:scale-110 active:scale-95"
                >
                  💬 Clique aqui para entrar em contato
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HelpPage;
