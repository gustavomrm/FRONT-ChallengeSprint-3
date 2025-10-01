import React from 'react';
import { Link } from 'react-router-dom';
import { FAQ_DATA } from '../data/constants';
import { useFAQ } from '../hooks/useFAQ';

const FAQPage: React.FC = () => {
  const { toggleItem, isOpen } = useFAQ();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white py-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-shadow-lg">
              ❓ PERGUNTAS FREQUENTES - FAQ
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns
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
        <div className="container-custom max-w-4xl">
          <div className="space-y-6">
            {FAQ_DATA.map((item) => (
              <div key={item.id} className="group">
                <article className={`card bg-gradient-to-r from-white to-blue-50 border border-blue-100 overflow-hidden transition-all duration-300 ${isOpen(item.id) ? 'shadow-xl' : 'hover:shadow-lg'}`}>
                  <div 
                    className="p-6 cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                    onClick={() => toggleItem(item.id)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg md:text-xl font-semibold pr-4">
                        {item.question}
                      </h3>
                      <div className={`transform transition-transform duration-300 ${isOpen(item.id) ? 'rotate-90' : ''}`}>
                        <span className="text-2xl">▶</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`transition-all duration-300 overflow-hidden ${isOpen(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                      <div className="prose prose-neutral max-w-none">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQPage;
