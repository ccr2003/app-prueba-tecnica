import { Component, computed, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-search-header',
  imports: [ButtonModule, Menu, DividerModule, CommonModule],
  templateUrl: './search-header.component.html',
  styleUrl: './search-header.component.scss',
})
export class SearchHeaderComponent {
  readonly itemsMasPopular = signal<MenuItem[]>([
    {
      label: 'Más popular',
      icon: 'pi pi-check',
      linkClass: 'custom-p-menu-item-link justify-between',
      command: () => this.changeItemMasPopular(0),
    },
    {
      label: 'Mejor valorado',
      linkClass: 'custom-p-menu-item-link',
      command: () => this.changeItemMasPopular(1),
    },
    {
      label: 'Más reciente',
      linkClass: 'custom-p-menu-item-link',
      command: () => this.changeItemMasPopular(2),
    },
  ]);

  protected itemsMasPopularSelected = signal<MenuItem>(
    this.itemsMasPopular()[0]
  );

  itemsButton = signal<string[]>(['Gasfitería', 'Ate']);

  removeItem($event: number) {
    const newItems = [...this.itemsButton()];
    newItems.splice($event, 1);

    this.itemsButton.set(newItems);
  }

  removeAllItems() {
    this.itemsButton.set([]);
  }

  changeItemMasPopular(index: number) {
    const currentItems = this.itemsMasPopular();

    const updatedItems = currentItems.map((item, i) => ({
      ...item,
      icon: i === index ? 'pi pi-check' : '',
      linkClass:
        i === index
          ? 'custom-p-menu-item-link justify-between'
          : 'custom-p-menu-item-link',
    }));

    this.itemsMasPopular.set(updatedItems);
    this.itemsMasPopularSelected.set(this.itemsMasPopular()[index]);
  }
}
