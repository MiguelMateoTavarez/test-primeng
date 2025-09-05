import { Routes } from '@angular/router';
import { FormsPageComponent } from './pages/forms-page/forms-page.component';

export const formRoutes: Routes = [
  {
    path: 'forms',
    component: FormsPageComponent
  },
  {
    path: '**',
    redirectTo: 'forms'
  }
];

export default formRoutes;
