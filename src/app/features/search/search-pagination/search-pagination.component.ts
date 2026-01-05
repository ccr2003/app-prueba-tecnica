import { Component, signal } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';

interface IPaginationCustom {
  first: number;
  rows: number;
  pageOptions: number[];
}

@Component({
  selector: 'app-search-pagination',
  imports: [PaginatorModule],
  templateUrl: './search-pagination.component.html',
  styleUrl: './search-pagination.component.scss',
})
export class SearchPaginationComponent {
  protected paginationOpts = signal<IPaginationCustom>({
    first: 1,
    rows: 10,
    pageOptions: [10, 20],
  });
}
