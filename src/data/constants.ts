import type { Integrante, FAQItem, ContactItem, Especialista } from '../types';

export const INTEGRANTES: Integrante[] = [
  {
    id: '1',
    name: 'Leonardo Zerbinatti de Sales',
    rm: '562992',
    github: 'https://github.com/Leonardo-Zerbinatti',
    linkedin: 'https://www.linkedin.com/in/leonardo-zerbinatti/',
    description: 'O Leonardo contribuiu com ideias importantes para o desenvolvimento do projeto e foi responsável por ajudar na estilização das páginas, garantindo um visual mais bonito e organizado.',
    image: '/img/Leonardo.png'
  },
  {
    id: '2',
    name: 'Gustavo Mendes da Rosa Moreira',
    rm: '565807',
    github: 'https://github.com/gustavomrm',
    linkedin: 'https://www.linkedin.com/in/gustavo-moreira-7ba9a7354/',
    description: 'Sou o Gustavo e participei ativamente do desenvolvimento do projeto. Contribuí com ideias gerais, sugeri os botões chamativos para facilitar a navegação e também ajudei na parte do bot integrado com o WhatsApp.',
    image: '/img/Gustavo.png'
  }
];

export const ESPECIALISTAS: Especialista[] = [
  { value: 'neurologia', label: 'Neurologia' },
  { value: 'cardiologia', label: 'Cardiologia' },
  { value: 'infectologia', label: 'Infectologia' },
  { value: 'ortopedia', label: 'Ortopedia' },
  { value: 'pneumologia', label: 'Pneumologia' },
  { value: 'fisioterapia', label: 'Fisioterapia' },
  { value: 'enfermagem', label: 'Enfermagem' },
  { value: 'psicologia', label: 'Psicologia' },
  { value: 'nutricao', label: 'Nutrição' }
];

export const CONTATOS: ContactItem[] = [
  {
    id: '1',
    title: 'Email',
    description: 'Envie-nos uma mensagem diretamente pelo seu provedor de e-mail.',
    link: 'mailto:ouvidoria.lims@hc.fm.usp.br',
    image: '/img/email (2).png'
  },
  {
    id: '2',
    title: 'Instagram',
    description: 'Acompanhe novidades, bastidores e interaja pelos stories.',
    link: 'https://www.instagram.com/hospitalhcfmusp/',
    image: '/img/instagram.png'
  },
  {
    id: '3',
    title: 'Telefone',
    description: 'Ligue diretamente para falar com nossa equipe de atendimento.',
    link: 'tel:1126610000',
    image: '/img/telefone.png'
  },
  {
    id: '4',
    title: 'WhatsApp',
    description: 'Mande mensagens diretamente pelo WhatsApp para tirar suas dúvidas!',
    link: 'https://wa.me/5511989417038',
    image: '/img/whatsapp.png'
  },
  {
    id: '5',
    title: 'Facebook',
    description: 'Acompanhe as novidades do Hospital das Clínicas pelo Facebook.',
    link: 'https://web.facebook.com/hospitaldasclinicasdafmusp?_rdc=1&_rdr#',
    image: '/img/facebook.png'
  },
  {
    id: '6',
    title: 'YouTube',
    description: 'Acompanhe nossos vídeos e conteúdos informativos no YouTube.',
    link: 'https://www.youtube.com/channel/UC_DUjcI35Hm0ix74KDQ67Jw/featured',
    image: '/img/youtube (2).png'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: '1',
    question: '1. Como funciona e qual é o HORÁRIO DE ATENDIMENTO da Central de Dispensação de Medicamentos (CDM)?',
    answer: 'A CDM atende em dias úteis, normalmente das 8h às 17h. Consulte a unidade específica para confirmar o horário.'
  },
  {
    id: '2',
    question: '2. Perdi a DATA E HORÁRIO para retirada dos medicamentos, o que devo fazer?',
    answer: 'O reagendamento poderá ser via Portal do Paciente HC ou presencial. Presencialmente, o paciente ou representante deve justificar a falta e reagendar a retirada para o próximo horário disponível. Caso o paciente não esteja presente, o representante deverá apresentar a Ficha Técnica de Dispensação de Medicamentos e cópia de documento do paciente contendo foto. Atenção: Das 10h20 às 12h40h, não há vagas disponíveis para reagendamento de retirada de medicamentos.'
  },
  {
    id: '3',
    question: '3. Perdi a RECEITA MÉDICA, o que devo fazer?',
    answer: 'A receita médica poderá ser acessada via Portal do Paciente HC. Presencialmente, na CDM, o paciente ou representante deverá comparecer à CDM e retirar a senha Receita Nova para a emissão da Ficha de Orientação Farmacológica que contém a informação da posologia (dose e horário) dos medicamentos. Este documento não substitui a receita original, porém a sua retirada contínua de medicamentos está garantida por meio da Ficha Técnica de Dispensação de Medicamentos que é entregue a você junto com os medicamentos.'
  },
  {
    id: '4',
    question: '4. Como devo fazer para me CADASTRAR no Programa Medicamento em Casa (PMC)?',
    answer: 'O cadastramento para o PMC é presencial e os critérios são: A. Estar em acompanhamento ambulatorial no Instituto Central, Instituto do Coração ou Instituto de Ortopedia e Traumatologia e ter retorno médico agendado; B. Residir no Estado de São Paulo e apresentar comprovante com endereço válido, CEP cadastrado nos correios; C. Não possuir na prescrição médica, medicamentos que necessitam de armazenamento em geladeira; D. Apresentar comprovante de residência; E. Assinar a ficha de adesão.'
  },
  {
    id: '5',
    question: '5. Sou cadastrado no Programa Medicamento em Casa (PMC), e preciso ATUALIZAR MEU ENDEREÇO, o que devo fazer?',
    answer: 'A atualização do endereço poderá ser feita por meio de correspondência eletrônica ou presencial pelo paciente ou representante. O prazo de resposta para correspondência eletrônica é de até 7 (sete) dias úteis. Se eletrônica: Pacientes atendidos no Instituto Central (Prédio dos Ambulatórios) e Instituto de Ortopedia e Traumatologia, enviar para: farmaciacdm.ichc@hc.fm.usp.br. Pacientes atendidos no Instituto do Coração, enviar para: pmc.incor@hc.fm.usp.br. Se presencial: Comparecer à CDM e retirar a senha Programa Medicamento em Casa (PMC) para apresentar o novo comprovante de residência.'
  },
  {
    id: '6',
    question: '6. Meu MEDICAMENTO precisa ficar ARMAZENADO NA GELADEIRA, posso me cadastrar no Programa Medicamento em Casa (PMC)?',
    answer: 'Não. Devido ao transporte, o Programa não contempla medicamentos que requerem refrigeração. Caso o seu medicamento necessite de armazenamento em geladeira você deverá trazer a caixa térmica ou isopor e retirá-lo presencialmente na CDM.'
  },
  {
    id: '7',
    question: '7. Meu MEDICAMENTO NÃO CHEGOU ao endereço cadastrado para entrega, o que devo fazer?',
    answer: 'A verificação da entrega poderá ser feita por meio de correspondência eletrônica ou presencial pelo paciente ou representante. Se eletrônica, o prazo de resposta é de até 7 (sete) dias úteis: Pacientes atendidos no Instituto Central (Prédio dos Ambulatórios) e Instituto de Ortopedia e Traumatologia, enviar para: farmaciacdm.ichc@hc.fm.usp.br. Pacientes atendidos no Instituto do Coração, enviar para: pmc.incor@hc.fm.usp.br. Se presencial: Comparecer à CDM e retirar a senha Programa Medicamento em Casa (PMC) para fornecimento de 10 dias dos seus medicamentos.'
  },
  {
    id: '8',
    question: '8. Por que a data de validade da receita registrada na Ficha Técnica de Dispensação de Medicamentos - FTDM, é diferente da data que consta na filipeta de agendamento?',
    answer: 'A data de validade da receita é cadastrada pela equipe da CDM durante o primeiro atendimento da receita nova. Para que a informação seja cadastrada corretamente, solicitamos ao paciente ou representante que apresente neste momento a Ficha de Retorno Médico. Atenção: Pode ocorrer que o agendamento de exame ou procedimento na clínica seja considerado pelo sistema informatizado como consulta médica.'
  },
  {
    id: '9',
    question: '9. Qual a VALIDADE da minha PRESCRIÇÃO MÉDICA?',
    answer: 'A validade da prescrição médica é: até a data da próxima consulta, quando há retorno médico agendado. de 30 dias quando não há retorno médico agendado. prescrições contendo o medicamento isotretinoína 20 mg terão validade de 7 (sete) dias a contar da data de sua emissão, sendo limitada a somente a 1 (uma) dispensação para o período máximo de 30 (trinta) dias de tratamento. prescrições contendo o medicamento talidomida 100 mg terão validade de 20 (vinte) dias a contar da data de sua emissão, sendo limitada a somente a 1 (uma) dispensação para o período máximo de 30 (trinta) dias de tratamento. prescrições de antimicrobianos são válidas, por 10 (dez) dias a contar da data de sua emissão.'
  },
  {
    id: '10',
    question: '10. Como saber se meu medicamento está disponível para retirada?',
    answer: 'Essa informação poderá ser obtida por meio de correspondência eletrônica ou presencial pelo paciente ou representante. Se eletrônica, o prazo de resposta é de até 7 (sete) dias úteis: Pacientes atendidos no Instituto Central (Prédio dos Ambulatórios) e Instituto de Ortopedia e Traumatologia, enviar para: farmaciacdm.ichc@hc.fm.usp.br. Pacientes atendidos no Instituto do Coração, enviar para: pmc.incor@hc.fm.usp.br. Se presencial: Comparecer à CDM e retirar a senha Receita Nova, no período das 7h às 18h (6h às 18h).'
  },
  {
    id: '11',
    question: '11. O que é o medicamento CEAF?',
    answer: 'O Componente Especializado da Assistência Farmacêutica (CEAF) é uma estratégia de acesso a medicamentos no âmbito do SUS, caracterizado pela busca da garantia da integralidade do tratamento medicamentoso, em nível ambulatorial, cujas linhas de cuidado estão definidas nos Protocolos Clínicos e Diretrizes Terapêuticas (PCDT), publicadas pelo Ministério da Saúde. Os medicamentos que fazem do Componente estão divididos em três grupos, com características, responsabilidades e formas de organização distintas. Estes grupos são definidos de acordo com os seguintes critérios: I. complexidade do tratamento da doença; II. garantia da integralidade do tratamento da doença no âmbito da linha de cuidado; III.e manutenção do equilíbrio financeiro entre as esferas de gestão do SUS. Grupo 1: I. maior complexidade da doença a ser tratada ambulatorialmente; II. refratariedade ou intolerância a primeira e/ou a segunda linha de tratamento; III. medicamentos que representam elevado impacto financeiro para o CEAF; IV. medicamentos incluídos em ações de desenvolvimento produtivo no complexo industrial da saúde. Este grupo subdivide-se em: Grupo 1A: medicamentos financiados e adquiridos pelo Ministério da Saúde; Grupo 1B: medicamentos financiados pelo Ministério da Saúde e adquiridos pela Secretaria de Estado da Saúde de São Paulo. Grupo 2: I. menor complexidade da doença a ser tratada ambulatorialmente em relação aos elencos no Grupo 1; II. refratariedade ou intolerância a primeira linha de tratamento. III. Estes medicamentos são financiados e adquiridos pela Secretaria de Estado da Saúde de São Paulo. Grupo 3: I. fármacos constantes na Relação Nacional de Medicamentos Essenciais vigente, considerados como a primeira linha de cuidado para o tratamento das doenças contempladas no CEAF. Estes medicamentos estão sob responsabilidade das Secretarias Municipais de Saúde, no âmbito do Componente Básico da Assistência Farmacêutica. O CEAF é regulamentado pelas Portarias GM/MS nº 02, de 28 de setembro de 2017 e nº 6, de 28 de setembro de 2017, retificadas em Diário Oficial em 13 de abril de 2018. https://saude.sp.gov.br/medicamentos medicamentos-do-componente-especializado-da-assistencia-farmaceutica/o-que-e/'
  },
  {
    id: '12',
    question: '12. O que é LME e qual a validade deste documento?',
    answer: 'O LME é o Laudo para solicitação, avaliação e autorização de Medicamentos Especializados do CEAF e possui 90 (noventa) dias de validade para solicitação do medicamento, a partir da data de seu preenchimento pelo médico solicitante.'
  }
];
