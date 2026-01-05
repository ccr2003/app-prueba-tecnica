import { Routes } from '@angular/router';

export const DETAIL_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () =>
      import('./detail-view/detail-view').then((m) => m.DetailViewComponent),
    title: 'Vista Detalle',
  },
];
