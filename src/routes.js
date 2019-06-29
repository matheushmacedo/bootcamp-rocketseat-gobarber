import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Matheus Macedo',
    email: 'matheus.hmacedo.com.br',
    password_hash: '1234567890',
  });
  return res.json(user);
});

export default routes;
