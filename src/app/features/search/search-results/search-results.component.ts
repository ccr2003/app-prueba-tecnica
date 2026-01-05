import { Component, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { Rating } from 'primeng/rating';

interface ICardImage {
  src: string;
  alt: string;
}

interface ICardEnterprise {
  abrev: string;
  name: string;
  description: string;
  ubication: string;
  valoration: string;
  countValorations: string;
  methodPayment: string;
  languages: string;
}

interface ICardElement {
  image: ICardImage;
  enterprise: ICardEnterprise;
}

@Component({
  selector: 'app-search-results',
  imports: [ButtonModule, DividerModule, Rating, FormsModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent {
  readonly itemsCards = computed<ICardElement[]>(() => [
    {
      image: {
        src: 'https://picsum.photos/seed/construction1/180/140',
        alt: 'Construcción de viviendas, remodelaciones, ampliaciones entre otros proyectos',
      },
      enterprise: {
        abrev: 'Alev',
        name: '"Complementos para la Construcción"',
        description:
          ' Construcción de viviendas, remodelaciones, ampliaciones entre otros proyectos ',
        ubication: 'La Molina • +5 distritos',
        valoration: '4.9',
        countValorations: '158 valoraciones',
        methodPayment: 'Efectivo • 2 más',
        languages: 'Español • Inglés',
      },
    },
    {
      image: {
        src: 'https://picsum.photos/seed/construction2/180/140',
        alt: 'Construcción de viviendas, remodelaciones, ampliaciones entre otros proyectos',
      },
      enterprise: {
        abrev: 'Alev',
        name: '"Complementos para la Construcción"',
        description:
          ' Construcción de viviendas, remodelaciones, ampliaciones entre otros proyectos ',
        ubication: 'La Molina • +5 distritos',
        valoration: '4.9',
        countValorations: '158 valoraciones',
        methodPayment: 'Efectivo • 2 más',
        languages: 'Español • Inglés',
      },
    },
    {
      image: {
        src: 'https://picsum.photos/seed/construction3/180/140',
        alt: 'Construcción de viviendas, remodelaciones, ampliaciones entre otros proyectos',
      },
      enterprise: {
        abrev: 'Alev',
        name: '"Complementos para la Construcción"',
        description:
          ' Construcción de viviendas, remodelaciones, ampliaciones entre otros proyectos ',
        ubication: 'La Molina • +5 distritos',
        valoration: '4.9',
        countValorations: '158 valoraciones',
        methodPayment: 'Efectivo • 2 más',
        languages: 'Español • Inglés',
      },
    },
    {
      image: {
        src: 'https://picsum.photos/seed/construction4/180/140',
        alt: 'Construcción de viviendas, remodelaciones, ampliaciones entre otros proyectos',
      },
      enterprise: {
        abrev: 'Alev',
        name: '"Complementos para la Construcción"',
        description:
          ' Construcción de viviendas, remodelaciones, ampliaciones entre otros proyectos ',
        ubication: 'La Molina • +5 distritos',
        valoration: '4.9',
        countValorations: '158 valoraciones',
        methodPayment: 'Efectivo • 2 más',
        languages: 'Español • Inglés',
      },
    },
    {
      image: {
        src: 'https://picsum.photos/seed/construction5/180/140',
        alt: 'Construcción de viviendas, remodelaciones, ampliaciones entre otros proyectos',
      },
      enterprise: {
        abrev: 'Alev',
        name: '"Complementos para la Construcción"',
        description:
          ' Construcción de viviendas, remodelaciones, ampliaciones entre otros proyectos ',
        ubication: 'La Molina • +5 distritos',
        valoration: '4.9',
        countValorations: '158 valoraciones',
        methodPayment: 'Efectivo • 2 más',
        languages: 'Español • Inglés',
      },
    },
  ]);
  protected readonly valueRating: number = 1;
}
