import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'email', pathMatch: 'full' },
  {
    path: 'help',
    loadComponent: () => import('./help/help.component')
  },
  {
    path: 'email',
    loadComponent: () =>
      import('./email/email-container/email-container.component')
  }
];
