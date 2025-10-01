'''Leonardo Zerbinatti de Sales RM:562992 TURMA 1TDSPH
   Gustavo Mendes RM:565807
'''
# 🏥 Teleatendimento Acessível - Hospital das Clínicas

Um site moderno e responsivo desenvolvido em **React + Vite + TypeScript** para facilitar o acesso à teleconsulta no Hospital das Clínicas da FMUSP. O projeto foi criado para ajudar pessoas com pouca familiaridade digital a marcarem consultas online de forma simples, segura e rápida.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca para interface de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida
- **React Router DOM** - Roteamento para aplicações React
- **CSS3** - Estilização com design responsivo
- **Hooks Personalizados** - Lógica reutilizável e estado compartilhado

## 📋 Funcionalidades

### ✨ Principais Recursos
- **Formulário de Teleconsulta** - Sistema completo de agendamento
- **Design Responsivo** - Adaptável a todos os tipos de tela
- **Navegação Intuitiva** - Menu de navegação claro e acessível
- **FAQ Interativo** - Perguntas frequentes com acordeão
- **Página de Contato** - Múltiplas formas de contato
- **Sobre o Hospital** - Informações detalhadas sobre a HC
- **Equipe de Desenvolvimento** - Perfil dos integrantes

### 🎯 Páginas Disponíveis
- **Home** (`/`) - Página inicial com informações sobre o HC
- **Ajuda** (`/ajuda`) - Suporte e orientações
- **Contato** (`/contato`) - Canais de comunicação
- **FAQ** (`/faq`) - Perguntas frequentes
- **Integrantes** (`/integrantes`) - Equipe de desenvolvimento

## 🛠️ Instalação e Configuração

### Pré-requisitos
- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn** (gerenciador de pacotes)

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd teleatendimento-hc
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse a aplicação**
   - Abra seu navegador em `http://localhost:5173`
   - A aplicação será recarregada automaticamente quando você fizer alterações

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor de desenvolvimento

# Build para produção
npm run build        # Cria build otimizado para produção

# Preview da build
npm run preview      # Visualiza a build de produção localmente

# Linting
npm run lint         # Executa o ESLint

# Type checking
npm run type-check   # Verifica tipos TypeScript
```

## 📁 Estrutura do Projeto

```
teleatendimento-hc/
├── public/
│   └── img/                    # Imagens estáticas
│       ├── logoguiahc.png
│       ├── HospitalDasClinicas.jpg
│       ├── faixahc.png
│       └── ... (outras imagens)
├── src/
│   ├── components/             # Componentes React
│   │   ├── Header.tsx         # Cabeçalho da aplicação
│   │   ├── Footer.tsx         # Rodapé da aplicação
│   │   ├── HomePage.tsx       # Página inicial
│   │   ├── HelpPage.tsx       # Página de ajuda
│   │   ├── ContactPage.tsx    # Página de contato
│   │   ├── FAQPage.tsx        # Página de FAQ
│   │   ├── IntegrantesPage.tsx # Página de integrantes
│   │   ├── TeleconsultaForm.tsx # Formulário de teleconsulta
│   │   ├── AboutHC.tsx        # Seção sobre o Hospital
│   │   └── *.css              # Estilos dos componentes
│   ├── hooks/                 # Hooks personalizados
│   │   ├── useTeleconsultaForm.ts # Hook do formulário
│   │   └── useFAQ.ts          # Hook do FAQ
│   ├── data/                  # Dados e constantes
│   │   └── constants.ts       # Dados estáticos
│   ├── types/                 # Definições TypeScript
│   │   └── index.ts           # Interfaces e tipos
│   ├── App.tsx                # Componente principal
│   ├── App.css                # Estilos globais da aplicação
│   ├── main.tsx               # Ponto de entrada
│   └── index.css              # Estilos globais
├── index.html                 # HTML principal
├── package.json               # Dependências e scripts
├── tsconfig.json              # Configuração TypeScript
├── vite.config.ts             # Configuração Vite
└── README.md                  # Este arquivo
```

## 🎨 Design e Responsividade

### Características do Design
- **Paleta de Cores**: Azul institucional (#003d99) e azul claro (#00b8ff)
- **Tipografia**: Montserrat para títulos, Segoe UI para textos
- **Layout**: Flexbox e CSS Grid para organização
- **Animações**: Transições suaves e efeitos hover

### Breakpoints Responsivos
- **Mobile**: < 600px
- **Tablet**: 600px - 768px
- **Desktop**: 768px - 992px
- **Large Desktop**: 992px - 1300px
- **Extra Large**: > 1300px

## 🔧 Hooks Personalizados

### `useTeleconsultaForm`
Gerencia o estado e lógica do formulário de teleconsulta:
- Controle de abertura/fechamento do modal
- Validação de dados do formulário
- Gerenciamento de estado dos campos
- Validação de data/hora

### `useFAQ`
Gerencia o estado do FAQ interativo:
- Controle de itens abertos/fechados
- Lógica de acordeão (apenas um item aberto por vez)

## 📱 Funcionalidades do Formulário

### Validações Implementadas
- **Nome**: Apenas letras e espaços
- **Email**: Formato de email válido
- **WhatsApp**: 11 dígitos numéricos
- **CPF**: 11 dígitos numéricos
- **Data/Hora**: Entre 8h e 18h, apenas dias futuros
- **Especialista**: Seleção obrigatória

### Especialidades Disponíveis
- Neurologia
- Cardiologia
- Infectologia
- Ortopedia
- Pneumologia
- Fisioterapia
- Enfermagem
- Psicologia
- Nutrição

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Netlify
1. Conecte seu repositório ao Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `dist`

### Build Manual
```bash
npm run build
# Os arquivos estarão na pasta 'dist'
```

## 🤝 Contribuição

### Como Contribuir
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Código
- Use TypeScript para tipagem
- Siga as convenções de nomenclatura do React
- Mantenha componentes pequenos e focados
- Use hooks personalizados para lógica reutilizável
- Documente componentes complexos

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Equipe de Desenvolvimento

### Grupo FIAP - Jornada Digital IMREA

- **Leonardo Zerbinatti de Sales** (RM: 562992)
  - GitHub: [@Leonardo-Zerbinatti](https://github.com/Leonardo-Zerbinatti)
  - LinkedIn: [Leonardo Zerbinatti](https://www.linkedin.com/in/leonardo-zerbinatti/)

- **Gustavo Mendes da Rosa Moreira** (RM: 565807)
  - GitHub: [@gustavomrm](https://github.com/gustavomrm)
  - LinkedIn: [Gustavo Moreira](https://www.linkedin.com/in/gustavo-moreira-7ba9a7354/)

## 📞 Contato

- **Email**: ouvidoria.lims@hc.fm.usp.br
- **Telefone**: (11) 2661-0000
- **WhatsApp**: (11) 98941-7038
- **Instagram**: [@hospitalhcfmusp](https://www.instagram.com/hospitalhcfmusp/)
- **Facebook**: [Hospital das Clínicas](https://web.facebook.com/hospitaldasclinicasdafmusp)
- **YouTube**: [Canal HC FMUSP](https://www.youtube.com/channel/UC_DUjcI35Hm0ix74KDQ67Jw)

## 🙏 Agradecimentos

- Hospital das Clínicas da FMUSP
- Faculdade de Informática e Administração Paulista (FIAP)
- Instituto de Medicina Física e Reabilitação (IMREA)
- Todos os profissionais de saúde que tornam este projeto possível

---

**Desenvolvido com ❤️ para democratizar o acesso à saúde digital**