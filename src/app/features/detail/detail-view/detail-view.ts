import { Component, computed, signal } from '@angular/core';
import { DetailReviewsComponent } from '../detail-reviews/detail-reviews';
import { DetailInfoComponent } from '../detail-info/detail-info';
import { DetailHeaderComponent } from '../detail-header/detail-header';
import { DetailGalleryComponent } from '../detail-gallery/detail-gallery';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-detail-view',
  imports: [
    DetailReviewsComponent,
    DetailInfoComponent,
    DetailHeaderComponent,
    DetailGalleryComponent,
    DividerModule,
  ],
  templateUrl: './detail-view.html',
  styleUrl: './detail-view.scss',
})
export class DetailViewComponent {
  protected especialistaIdiomas = signal<string[]>([
    'Español',
    'Inglés',
    'Quechua',
  ]);

  protected flagEspecialistaPayments = signal<boolean>(false);

  protected especialistaPaymentsBase = signal<string[]>([
    'Efectivo',
    'POS',
    'Transferencia bancaria',
  ]);

  protected especialistaPaymentsExtend = signal<string[]>([
    'Yape',
    'Plin',
    'Tarjeta de crédito',
  ]);

  toggleEspecialistaPayments() {
    this.flagEspecialistaPayments.set(!this.flagEspecialistaPayments());
  }

  readonly especialistaPayments = computed<string[]>(() => {
    const baseItems = this.especialistaPaymentsBase();
    if (this.flagEspecialistaPayments()) {
      return [...baseItems, ...this.especialistaPaymentsExtend()];
    } else {
      return baseItems;
    }
  });

  protected flagAreasAtencion = signal<boolean>(false);

  protected areasAtencionBase = signal<string[]>([
    'Barranco',
    'Breña',
    'La Molina',
    'Magdalena del Mar',
    'Miraflores',
    'San Isidro',
  ]);

  protected areasAtencionExtend = signal<string[]>([
    'Surco',
    'San Borja',
    'Jesús María',
    'Lince',
  ]);

  toggleAreasAtencion() {
    this.flagAreasAtencion.set(!this.flagAreasAtencion());
  }

  readonly areasAtencion = computed<string[]>(() => {
    const baseItems = this.areasAtencionBase();
    if (this.flagAreasAtencion()) {
      return [...baseItems, ...this.areasAtencionExtend()];
    } else {
      return baseItems;
    }
  });
}
