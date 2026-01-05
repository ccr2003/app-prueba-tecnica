import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem, MenuItemCommandEvent } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { Rating } from 'primeng/rating';

@Component({
  selector: 'app-detail-reviews',
  imports: [ButtonModule, MenuModule, Rating, FormsModule],
  templateUrl: './detail-reviews.html',
  styleUrl: './detail-reviews.scss',
})
export class DetailReviewsComponent {
  protected itemsRating = signal<{ stars: number; percentage: number }[]>([
    { stars: 5, percentage: 78.1 },
    { stars: 4, percentage: 18.8 },
    { stars: 3, percentage: 3.1 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ]);

  readonly itemsMasPopular = signal<MenuItem[]>([
    {
      label: 'Más relevantes',
      command: ($event: MenuItemCommandEvent) =>
        this.changeItemMasPopular($event),
    },
    {
      label: 'Más recientes',
      command: ($event: MenuItemCommandEvent) =>
        this.changeItemMasPopular($event),
    },
    {
      label: 'Calificación más alta',
      command: ($event: MenuItemCommandEvent) =>
        this.changeItemMasPopular($event),
    },
    {
      label: 'Calificación más baja',
      command: ($event: MenuItemCommandEvent) =>
        this.changeItemMasPopular($event),
    },
  ]);

  protected itemsMasPopularSelected = signal<MenuItem>(
    this.itemsMasPopular()[0]
  );

  changeItemMasPopular($event: MenuItemCommandEvent) {
    if ($event.item) {
      this.itemsMasPopularSelected.set($event.item);
    }
  }

  protected itemsReviews = signal<
    {
      name: string;
      date: string;
      rating: number;
      comment: string;
      likes: number;
      dislikes: number;
    }[]
  >([
    {
      name: 'Rocio Cordova',
      date: '06/12/2025',
      rating: 5,
      comment:
        'Excelente trabajo! Buen servicio desde el primer contacto, atención de calidad, y sobretodo, mucha atención en los detalles. Estoy satisfecha con los resultados.',
      likes: 0,
      dislikes: 0,
    },
    {
      name: 'Juan Paredes',
      date: '06/12/2025',
      rating: 4,
      comment:
        'Excelente trabajo! Buen servicio desde el primer contacto, atención de calidad, y sobretodo, mucha atención en los detalles. Estoy satisfecha con los resultados.',
      likes: 0,
      dislikes: 0,
    },
    {
      name: 'Marisol Guerra',
      date: '06/12/2025',
      rating: 3,
      comment:
        'Excelente trabajo! Buen servicio desde el primer contacto, atención de calidad, y sobretodo, mucha atención en los detalles. Estoy satisfecha con los resultados.',
      likes: 0,
      dislikes: 0,
    },
    {
      name: 'Julio Merino',
      date: '06/12/2025',
      rating: 5,
      comment:
        'Excelente trabajo! Buen servicio desde el primer contacto, atención de calidad, y sobretodo, mucha atención en los detalles. Estoy satisfecha con los resultados.',
      likes: 1,
      dislikes: 0,
    },
  ]);

  protected btnMasPopularItem = {
    icon: 'pi pi-chevron-down',
    label: 'Servicios',
  };
}
