import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '', // <baseUrl>/
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId', // <baseUrl>/users/<userId>
    component: UserTasksComponent,
    children: [
      {
        path: 'tasks', // <baseUrl>/users/<userId>/tasks
        component: TasksComponent,
      },
      {
        path: 'tasks/new', // <baseUrl>/users/<userId>/tasks/new
        component: NewTaskComponent,
      },
    ],
  },
  {
    path: '**', // catch-all for 404
    component: NotFoundComponent,
  },
];
