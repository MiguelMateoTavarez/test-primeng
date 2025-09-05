import { Routes } from '@angular/router';
import { AppLayoutComponent } from './shared/layouts/app-layout/app-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    loadChildren: () => import('./domains/forms/forms.routes')
  },
  {
    path: '**',
    redirectTo: ''
  }
];
