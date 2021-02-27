import 'reflect-metadata';
import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import 'express-async-errors';

import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';
import rateLimiter from './middlewares/rateLimiter';
import routes from '@shared/infra/http/routes';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(rateLimiter); //para limitar requisições API
app.use(routes);
app.use(errors()); // Para exibir os errors do CELEBRATE

// Middleware para trativa de error em todas as (rotas ou requisições)
//Após criar esse middleware eu não preciso de um try catch nas minhas rotas ou controllers
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    //Tratando errors que ocorream na aplicação
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }
    console.error(err);
    // errors que não foram tratados ou que não estava sendo esperado
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);
app.listen(3333, () => {
  console.log('Server start on 3333');
});
