import React from 'react';
import { Link } from 'react-router-dom';
import { CONTATOS } from '../data/constants';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white py-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-shadow-lg">
              📞 CONTATO
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Entre em contato conosco através dos canais abaixo
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
              to="/faq" 
              className="btn-outline bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-blue-600"
            >
              ❓ PERGUNTAS FREQUENTES
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
                alt="faixa da hc na tela" 
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </section>

          {/* Contact Cards */}
          <section className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Nossos Canais de Contato
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Escolha a forma mais conveniente para entrar em contato conosco
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CONTATOS.map((contato) => (
                <div key={contato.id} className="group">
                  <a 
                    href={contato.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="card-interactive bg-gradient-to-br from-white to-blue-50 border border-blue-100 h-full flex flex-col items-center text-center group-hover:shadow-2xl transition-all duration-300 p-8"
                  >
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-blue-200">
                      <img 
                        src={contato.image} 
                        alt={contato.title} 
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            // Fallback para emoji se a imagem não carregar
                            const emojiMap: { [key: string]: string } = {
                              'Email': '📧',
                              'Instagram': '📷',
                              'Telefone': '📞',
                              'WhatsApp': '💬',
                              'Facebook': '👥',
                              'YouTube': '📺'
                            };
                            parent.innerHTML = `<span class="text-blue-600 text-4xl">${emojiMap[contato.title] || '📱'}</span>`;
                          }
                        }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-blue-700 mb-4 group-hover:text-blue-800">
                      {contato.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 mb-6 flex-grow">
                      {contato.description}
                    </p>
                    <div className="mt-auto">
                      <div className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                        <span className="mr-2">Clique para acessar</span>
                        <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Additional Info Section */}
          <section className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  💡 Dica Importante
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Para agendar sua teleconsulta, recomendamos usar o botão "MARCAR TELECONSULTA" na página inicial, 
                  que irá direcioná-lo para nosso formulário especializado. Os canais acima são ideais para 
                  dúvidas gerais e informações sobre o Hospital das Clínicas.
                </p>
                <Link 
                  to="/" 
                  className="btn-primary inline-flex items-center"
                >
                  <span className="mr-2">📞</span>
                  Ir para Agendamento
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
