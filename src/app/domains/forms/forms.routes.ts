import { Routes } from '@angular/router';
import FormsPageComponent from './pages/forms-page/forms-page.component';

export const formRoutes: Routes = [
  {
    path: '',
    component: FormsPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export default formRoutes;
