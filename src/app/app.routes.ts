import { Routes } from '@angular/router';
import { AppLayoutComponent } from './shared/layouts/app-layout/app-layout.component';

export const routes: Routes = [
  {
    path: 'forms',
    component: AppLayoutComponent,
    loadChildren: () => import('./domains/forms/forms.routes'),
  },
  {
    path: 'tables',
    component: AppLayoutComponent,
    loadChildren: () => import('./domains/tables/tables.routes'),
  },
  {
    path: '**',
    redirectTo: 'forms',
  },
];
