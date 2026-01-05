import { Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultComponent,
    title: 'Vista Principal',
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () =>
          import('./features/search/search.routes').then(
            (m) => m.SEARCH_ROUTES
          ),
        title: 'Vista Search',
      },
      {
        path: 'detail/:p',
        loadChildren: () =>
          import('./features/detail/detail.routes').then(
            (m) => m.DETAIL_ROUTES
          ),
        title: 'Vista Detail',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
