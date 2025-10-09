# 📚 Meu Projeto Docusaurus

Este repositório contém um site de documentação criado com [Docusaurus 2](https://docusaurus.io/), um gerador de sites estáticos moderno baseado em React, projetado para criar documentação de forma rápida e organizada.

---

## 🚀 Começando

### Pré-requisitos

- [Node.js](https://nodejs.org/) **>= 16**
- Gerenciador de pacotes **npm** ou **yarn**

Verifique se já estão instalados:

```bash
node -v
npm -v
```

---

### 📦 Instalação

Clone este repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
npm install
```

ou com **yarn**:

```bash
yarn
```

---

### ▶️ Ambiente de desenvolvimento

Para iniciar o servidor local de desenvolvimento:

```bash
npm start
```

O site ficará disponível em:

```
http://localhost:3000
```

O servidor faz *hot reload*, ou seja, mudanças em arquivos são refletidas automaticamente.

---

### 📤 Build de Produção

Para gerar os arquivos estáticos do site:

```bash
npm run build
```

A saída será gerada na pasta:

```
build/
```

Você pode publicar esse conteúdo em qualquer serviço de hospedagem de sites estáticos (Netlify, Vercel, GitHub Pages, etc).

Para testar o build localmente:

```bash
npm run serve
```

E acesse:

```
http://localhost:3000
```

---

## 📂 Estrutura do Projeto

```bash
.
├── blog/                 # Postagens de blog em Markdown
├── docs/                 # Documentação principal em Markdown
├── src/                  # Código React para customizações
│   ├── components/       # Componentes React reutilizáveis
│   └── css/              # Estilos adicionais
├── static/               # Arquivos estáticos (imagens, favicon, etc.)
├── docusaurus.config.js  # Configuração principal do site
├── sidebars.js           # Configuração da sidebar da documentação
├── package.json          # Dependências e scripts
└── README.md             # Este arquivo
```

---

## ✨ Customizações

- **Tema:** Você pode personalizar cores, fontes e layout editando `docusaurus.config.js` e `src/css/custom.css`.
- **Sidebar:** Configure a ordem e a hierarquia dos documentos em `sidebars.js`.
- **Páginas extras:** Arquivos em `src/pages/` se tornam automaticamente novas rotas no site.

---

## 📦 Publicação

Este projeto utiliza a **[Vercel](https://vercel.com/)** para hospedagem.  
A Vercel é uma plataforma gratuita e prática para publicar sites estáticos ou aplicações front-end, como este projeto em **Docusaurus**.  

⚠️ **Importante:** O processo de deploy (publicação) é responsabilidade do administrador do repositório.  
Caso seja necessário atualizar a versão publicada, **contate o administrador** para que ele realize o deploy na Vercel.

---

## 🛠 Scripts úteis

- `npm start` → Inicia o servidor local de desenvolvimento  
- `npm run build` → Gera o build de produção  
- `npm run serve` → Serve o build localmente  
- `npm run deploy` → Publica no GitHub Pages  

---

## 📖 Documentação Oficial

- [Guia Rápido](https://docusaurus.io/docs)
- [Configurações](https://docusaurus.io/docs/configuration)
- [Deployment](https://docusaurus.io/docs/deployment)

---

Feito com ❤️ usando [Docusaurus](https://docusaurus.io/)
