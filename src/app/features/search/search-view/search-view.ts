import { Component } from '@angular/core';
import { FilterSidebarComponent } from '../filter-sidebar/filter-sidebar.component';
import { SearchHeaderComponent } from '../search-header/search-header.component';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { SearchPaginationComponent } from '../search-pagination/search-pagination.component';

@Component({
  selector: 'app-search-view',
  imports: [
    FilterSidebarComponent,
    SearchHeaderComponent,
    SearchResultsComponent,
    SearchPaginationComponent,
  ],
  templateUrl: './search-view.html',
  styleUrl: './search-view.scss',
})
export class SearchViewComponent {}
