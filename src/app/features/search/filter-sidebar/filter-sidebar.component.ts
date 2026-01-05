import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';

interface IOptionCbx {
  label: string;
  checked: boolean;
  results: number;
}

interface IOptionServicios extends IOptionCbx {}

interface IOptionDistritos extends IOptionCbx {}

interface IOptionIdiomas extends IOptionCbx {}

@Component({
  selector: 'app-filter-sidebar',
  imports: [
    CheckboxModule,
    DividerModule,
    IconField,
    InputIcon,
    InputText,
    FormsModule,
  ],
  templateUrl: './filter-sidebar.component.html',
  styleUrl: './filter-sidebar.component.scss',
})
export class FilterSidebarComponent {
  protected flagServicios = signal<boolean>(true);
  protected optItemsServicios = signal<IOptionServicios[]>([
    {
      checked: false,
      label: 'Arquitectura y Diseño de Interiores',
      results: 245,
    },
    {
      checked: false,
      label: 'Carpintería',
      results: 705,
    },
    {
      checked: false,
      label: 'Cerrajería',
      results: 492,
    },
    {
      checked: false,
      label: 'Construcción y Remodelaciones',
      results: 1184,
    },
    {
      checked: true,
      label: 'Gasfitería',
      results: 2004,
    },
  ]);
  protected optItemsServiciosFiltered = signal<IOptionServicios[]>(
    this.optItemsServicios()
  );
  protected searchTermServicios: string | null = null;

  protected flagDistritos = signal<boolean>(true);
  protected optItemsDistritos = signal<IOptionDistritos[]>([
    {
      checked: true,
      label: 'Ate',
      results: 289,
    },
    {
      checked: false,
      label: 'Barranco',
      results: 1854,
    },
    {
      checked: false,
      label: 'Breña',
      results: 492,
    },
    {
      checked: false,
      label: 'Carabayllo',
      results: 1693,
    },
    {
      checked: false,
      label: 'Cercado de Lima',
      results: 5154,
    },
  ]);
  protected optItemsDistritosFiltered = signal<IOptionDistritos[]>(
    this.optItemsDistritos()
  );
  protected searchTermDistritos: string | null = null;

  protected flagIdiomas = signal<boolean>(true);
  protected optItemsIdiomas = signal<IOptionIdiomas[]>([
    {
      checked: false,
      label: 'Español',
      results: 289,
    },
    {
      checked: false,
      label: 'Quechua',
      results: 1854,
    },
    {
      checked: false,
      label: 'Aymara',
      results: 492,
    },
    {
      checked: false,
      label: 'Inglés',
      results: 1693,
    },
    {
      checked: false,
      label: 'Portugués',
      results: 5154,
    },
  ]);
  protected optItemsIdiomasFiltered = signal<IOptionIdiomas[]>(
    this.optItemsIdiomas()
  );
  protected searchTermIdiomas: string | null = null;

  toggleServicios() {
    this.flagServicios.set(!this.flagServicios());
  }

  filterItemsServicios() {
    const data = [...this.optItemsServicios()];
    if (this.searchTermServicios) {
      const term = this.searchTermServicios.toLowerCase();
      const newData = data.filter((item) =>
        item.label?.toLowerCase().includes(term)
      );
      this.optItemsServiciosFiltered.set(newData);
    } else {
      this.optItemsServiciosFiltered.set(data);
    }
  }

  toggleDistritos() {
    this.flagDistritos.set(!this.flagDistritos());
  }

  filterItemsDistritos() {
    const data = [...this.optItemsDistritos()];
    if (this.searchTermDistritos) {
      const term = this.searchTermDistritos.toLowerCase();
      const newData = data.filter((item) =>
        item.label?.toLowerCase().includes(term)
      );
      this.optItemsDistritosFiltered.set(newData);
    } else {
      this.optItemsDistritosFiltered.set(data);
    }
  }

  toggleIdiomas() {
    this.flagIdiomas.set(!this.flagIdiomas());
  }

  filterItemsIdiomas() {
    const data = [...this.optItemsIdiomas()];
    if (this.searchTermIdiomas) {
      const term = this.searchTermIdiomas.toLowerCase();
      const newData = data.filter((item) =>
        item.label?.toLowerCase().includes(term)
      );
      this.optItemsIdiomasFiltered.set(newData);
    } else {
      this.optItemsIdiomasFiltered.set(data);
    }
  }
}
