import { Router } from 'express';
import { version } from '../../package.json';

const api = ({ config, db }) => {
  const api = Router();

  api.get('/', (req, res) => {
    res.json({ version });
  });

  return api;
};

export default api;