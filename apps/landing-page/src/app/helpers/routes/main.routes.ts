import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('../../pages/landing/landing.module').then((m) => m.LandingModule),
  },
];
