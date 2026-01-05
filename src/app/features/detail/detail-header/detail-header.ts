import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Rating } from 'primeng/rating';

@Component({
  selector: 'app-detail-header',
  imports: [Rating, ButtonModule, FormsModule],
  templateUrl: './detail-header.html',
  styleUrl: './detail-header.scss',
})
export class DetailHeaderComponent {
  protected valueRating = 1;
}
