import { Router } from 'express';
// import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';
// import providersRouter from '@modules/appointments/infra/http/routes/providers.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';

const routes = Router();
//Quando eu declaro o  routes.use('/resource',fileRouter)
//Eu estou declarando na aplicação o prefixo do resource da rota
//com isso no meu aquivo appointmentsRouter eu não preciso colocar
//mais o prefixo para as demais rotas
// routes.use('/appointments', appointmentsRouter);
// routes.use('/providers', providersRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);

export default routes;
