import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'admin' },
  {
    path: 'login',
    loadChildren: () =>
      import('../../screens/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('../../screens/admin/admin.module').then((m) => m.AdminModule),
  },
];
