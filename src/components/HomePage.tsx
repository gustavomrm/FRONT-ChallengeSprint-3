import React from 'react';
import AboutHC from './AboutHC';

interface HomePageProps {
  onOpenForm: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onOpenForm }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <main>
        <AboutHC />
        
        {/* Hospital Image Section */}
        <section className="section-padding bg-gradient-to-br from-cyan-50 to-green-50">
          <div className="container-custom">
            <div className="text-center">
              <div className="relative group">
                <img 
                  src="/img/HospitalDasClinicas.jpg" 
                  alt="Foto do hospital das clinicas" 
                  className="w-full max-w-5xl mx-auto rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </div>
              
              {/* CTA Section */}
              <div className="mt-12 animate-bounce-gentle">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Pronto para sua consulta?
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Agende sua teleconsulta de forma rápida e segura
                  </p>
                  <button 
                    onClick={onOpenForm} 
                    className="btn-accent text-xl py-4 px-8 shadow-xl hover:shadow-2xl transform hover:scale-110 active:scale-95"
                  >
                    📞 MARCAR TELECONSULTA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
