const app = require('./app');

app.listen(process.env.SERVER_PORT, () => console.log(`Server rodando na porta ${process.env.SERVER_PORT}`));