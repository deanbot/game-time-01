import config from './config.json';

const app = require('./app');

const PORT = process.env.PORT || config.port;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});