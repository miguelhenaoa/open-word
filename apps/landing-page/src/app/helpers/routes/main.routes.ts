import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('../../pages/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('../../pages/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('../../pages/about-us/about-us.component').then(
        (m) => m.AboutUsComponent
      ),
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('../../pages/faq/faq.component').then((m) => m.FaqComponent),
  },
  {
    path: 'e-billing',
    loadComponent: () =>
      import('../../pages/e-billing/e-billing.component').then(
        (m) => m.EBillingComponent
      ),
  },
  {
    path: 'financial-statements',
    loadComponent: () =>
      import(
        '../../pages/financial-statements/financial-statements.component'
      ).then((m) => m.FinancialStatementsComponent),
  },
];
