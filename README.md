#  NITROS Bot

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js) 
![Discord.js](https://img.shields.io/badge/discord.js-v14-blue?logo=discord) 
![License](https://img.shields.io/badge/license-MIT-green)

Bot em **Node.js** para **Discord**, focado em **administração**, **tickets de vendas** e **integração com QR Codes**.  

---

##  Funcionalidades
-  **Administração** — comandos básicos de gerenciamento.  
-  **QR Code** — setar e enviar QR codes personalizados.  
-  **Produtos** — adicionar novos produtos ao servidor.  
-  **Avisos** — criar avisos para membros.  
-  **Tickets de Vendas**  
  - Sistema baseado em **Select Menu**.  
  - Criação automática de canal.  
  - Envio automático do QR Code configurado.  
  - Inclusão de **cupons** fornecidos pelo cliente.  
-  **Logs** — canal dedicado para registro das vendas.
- - **Transcript automático** dos tickets salvos nas logs. 

---

##  Tecnologias
- [Node.js](https://nodejs.org/)  
- [discord.js v14](https://discord.js.org/)  
- [discord-html-transcripts](https://www.npmjs.com/package/discord-html-transcripts)  
- [quick.db](https://www.npmjs.com/package/quick.db) + [better-sqlite3](https://www.npmjs.com/package/better-sqlite3)  
- [moment-timezone](https://momentjs.com/timezone/)  
- [mongoose](https://mongoosejs.com/) (suporte pronto, ainda não utilizado)  
- Outras libs auxiliares: `colors`, `sourcebin`, `path`, `write-file-atomic`

---

##  Estrutura
- Commands/ # Comandos
- Events/ # Eventos
- handler/ # Handler de comandos/eventos
- assets/images/ # Imagens e logos
- index.js # Arquivo principal
- qrCodeConfig.json # Configuração dos QR Codes
- json.sqlite # Armazenamento local

- 
---

##  Como Rodar
```bash
# 1. Clone o repositório
git clone <URL_DO_REPOSITORIO>

# 2. Instale as dependências
npm install

# 3. Crie um arquivo .env e adicione o token do bot:
echo TOKEN=seu_token_aqui > .env

# 4. Inicie o bot
node index.js
```
No seu index.js, certifique-se de carregar o dotenv no início:
```
require("dotenv").config();
client.login(process.env.TOKEN);
```

 Atenção: nunca coloque o token diretamente no código.
Adicione o .env ao .gitignore para evitar que seja enviado ao GitHub.
---

 Observações

Não possui integração com gateway de pagamento.

Armazena dados localmente com quick.db.

Pode ser deployado em local, Heroku, Docker ou VPS.

 Autor

Desenvolvido por Ryan Braga 

##  Licença
Este projeto está licenciado sob os termos da licença **MIT**.  
Consulte o arquivo [LICENSE](LICENSE) para mais informações.
