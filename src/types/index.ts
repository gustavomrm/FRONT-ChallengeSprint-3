export interface TeleconsultaFormData {
  name: string;
  email: string;
  whatsapp: string;
  cpf: string;
  diaehora: string;
  especialista: string;
}

export interface Integrante {
  id: string;
  name: string;
  rm: string;
  github: string;
  linkedin: string;
  description: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactItem {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

export interface Especialista {
  value: string;
  label: string;
}
