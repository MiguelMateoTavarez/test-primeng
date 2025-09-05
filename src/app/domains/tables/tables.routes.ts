import { Routes } from '@angular/router';
import TablePageComponent from './pages/table-page/table-page.component';


export const tableRoutes: Routes = [
  {
    path: '',
    component: TablePageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export default tableRoutes;
