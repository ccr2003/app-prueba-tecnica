import { Routes } from '@angular/router';

export const SEARCH_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () =>
      import('./search-view/search-view').then((m) => m.SearchViewComponent),
    title: 'Vista Buscador',
  },
];
