import { container } from 'tsyringe';
import './providers';
import '@modules/users/providers';

// import IAppointementsRepository from '@modules/appointments/repositories/IAppointimentsRepository';
// import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

// import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
// import NotificationsRepository from '@modules/notifications/infra/typeorm/repositories/NotificationsRepository';

// container.registerSingleton<IAppointementsRepository>(
//   'AppointmentsRepository',
//   AppointmentsRepository,
// );
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);
// container.registerSingleton<INotificationsRepository>(
//   'NotificationsRepository',
//   NotificationsRepository,
// );