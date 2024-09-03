import { Routes } from '@angular/router';
import { routes as userRoutes } from './users/users.routes';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '', // <baseUrl>/
    component: NoTaskComponent,
    // redirectTo: '/users/1',
    // pathMatch: 'full', // redirect to /users/2 if no other path matches
  },
  {
    path: 'users/:userId', // <baseUrl>/users/<userId>
    component: UserTasksComponent,
    children: userRoutes,
  },
  {
    path: '**', // catch-all for 404
    component: NotFoundComponent,
  },
];
