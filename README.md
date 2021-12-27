
# Register-Web

Cliente web de registro de pontos.

Com o crescente numero de vagas com modalidade home office, o sistema é utilizado para controle dos horários dos funcionários.

### Stack utilizada:
- React.
- Apollo-client.
- Autenticação por JWT.
- Utilização de pooling.
- Cache in memory.
- Styled-Components.

## Instalação

Clone este repositório:

```bash
git clone https://github.com/Andrei-Majada/Register-web.git
```

no diretório de origem abra o terminal e execute:
```bash
npm i
```
e depois:
```bash
npm start
```
Caso o cliente não abra sozinho em seu navegador padrão, vá ate seu navegador:
```bash
localhost:3000
```
No arquivo  "apolloProvider.js" você pode alterar a url em que a API está disponível. Como padrão ela está apontando para: 
```bash
http://localhost:4000/api
```

## Páginas

**LoginPage** -> página de login dos usuários, que faz o roteamento conforme a sua role(*admin* ou *employee*).

**Dashboard**-> página onde os usuários "*admin*" podem ver em tempo real todos os registros de todos os usuários.

**Register**-> página onde os usuários "*employee*" podem adicionar novos registros de entrada ou saída e visualizar a atualização em tempo real da sua lista de registros. 
