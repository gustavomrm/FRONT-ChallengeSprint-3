import React from 'react';

const AboutHC: React.FC = () => {
  return (
    <section id="hc" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        {/* Banner Image */}
        <div className="text-center mb-12">
          <img 
            src="/img/faixahc.png" 
            alt="faixa da hc na tela" 
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg animate-fade-in"
          />
        </div>
        
        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center mb-12 text-gradient animate-fade-in">
            🏥 Sobre o Hospital das Clínicas
          </h1>
          
          {/* Content Cards */}
          <div className="grid gap-8 lg:gap-12">
            <div className="card-interactive bg-gradient-to-br from-white to-blue-50 border border-blue-100">
              <p className="text-lg leading-relaxed text-gray-700">
                O Hospital das Clínicas inaugurado em 1944, é hoje uma autarquia especial do Governo de São Paulo,
                vinculada à Secretaria de Estado da Saúde para fins de coordenação administrativa e subordinado à FMUSP
                para fins de ensino, pesquisa e prestação de serviços de saúde à comunidade, o Hospital das Clínicas da
                FMUSP que se consolidou como referência de produção e difusão de conhecimento técnico-científico,
                excelência em ensino e saúde pública.
              </p>
            </div>
            
            <div className="card-interactive bg-gradient-to-br from-white to-cyan-50 border border-cyan-100">
              <p className="text-lg leading-relaxed text-gray-700">
                O Hospital das Clínicas é muito mais do que uma instituição de saúde — ele é um símbolo de cuidado,
                ciência e humanidade. Com uma história marcada por dedicação, inovação e acolhimento, o HC se tornou um
                dos maiores complexos hospitalares da América Latina, referência nacional e internacional no atendimento
                médico, na formação de profissionais e na pesquisa em saúde.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mt-4">
                Aqui, cada corredor conta uma história de superação. Cada consulta é um passo rumo à esperança. Cada
                profissional representa um elo entre conhecimento técnico e empatia genuína. Do atendimento básico aos
                casos mais complexos, o Hospital das Clínicas oferece assistência humanizada e de excelência, sempre
                pautado nos princípios do SUS e no compromisso com a vida.
              </p>
            </div>

            {/* Map Section */}
            <div className="card bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <h3 className="text-2xl font-bold text-center mb-6 text-green-800">📍 Nossa Localização</h3>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1828.6627533545986!2d-46.67251030160518!3d-23.556750099999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce590009755f85%3A0x4b04d91fa556876c!2sHospital%20das%20clinicas!5e0!3m2!1spt-BR!2sbr!4v1746823822947!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Hospital das Clínicas"
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="card-interactive bg-gradient-to-br from-white to-blue-50 border border-blue-100">
              <p className="text-lg leading-relaxed text-gray-700">
                O HCFMUSP vem avançando e consolidando-se como referência no tratamento de doenças de alta complexidade e
                também nos campos do ensino, da pesquisa, da assistência e da inovação. Com mais de 21.000 colaboradores
                realiza mais de um milhão de consultas ambulatoriais, 232 mil atendimentos de urgências e emergências
                por ano, mais de 50 mil cirurgias por ano.
              </p>
            </div>
            
            <div className="card-interactive bg-gradient-to-br from-white to-cyan-50 border border-cyan-100">
              <p className="text-lg leading-relaxed text-gray-700">
                Além de cuidar de milhões de pacientes todos os anos, o HC é também um centro de ensino e pesquisa que
                forma os melhores médicos, enfermeiros, fisioterapeutas e pesquisadores do país. Em parceria com a
                Faculdade de Medicina da USP, o hospital está na vanguarda das inovações médicas, contribuindo para o
                avanço da ciência e para um futuro mais saudável para todos.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mt-4">
                No Hospital das Clínicas, a tecnologia caminha ao lado da solidariedade. É um lugar onde o conhecimento
                transforma vidas. Um espaço onde cada pessoa importa. Um porto seguro para quem busca saúde, respeito e
                dignidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHC;
