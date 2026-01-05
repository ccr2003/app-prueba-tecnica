import {
  Component,
  computed,
  HostListener,
  OnInit,
  signal,
} from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import {
  IAutoCompleteSearch,
  IButtonServicios,
} from '../../interfaces/default.interface';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-navbar',
  imports: [
    AutoCompleteModule,
    OverlayBadgeModule,
    BadgeModule,
    ButtonModule,
    Menu,
    AvatarModule,
    AvatarGroupModule,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    this.onWindowResize();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.isMobile.set(window.innerWidth < 768);
    this.isMediumMobile.set(window.innerWidth < 1125);
  }

  protected isMobile = signal<boolean>(false);
  protected isMediumMobile = signal<boolean>(false);

  protected urlLogo: string =
    'https://contratalo.startupdev.tech/assets/svg/logo.svg';

  protected acItems: IAutoCompleteSearch = {
    placeholder: '¿Qué especialista estas buscando?',
  };

  protected btnServiciosItem: IButtonServicios = {
    icon: 'pi pi-chevron-down',
    label: 'Servicios',
  };

  readonly itemsServicios = signal<MenuItem[]>([
    {
      label: 'Plomeria',
      icon: 'pi pi-wrench',
    },
    {
      label: 'Electricidad',
      icon: 'pi pi-bolt',
    },
    {
      label: 'Carpintería',
      icon: 'pi pi-hammer',
    },
    {
      label: 'Pintura',
      icon: 'pi pi-palette',
    },
    {
      label: 'Limpieza',
      icon: 'pi pi-sparkles',
    },
    {
      label: 'Jardinería',
    },
    {
      label: 'Reparaciones',
      icon: 'pi pi-cog',
    },
    {
      label: 'Instalaciones',
      icon: 'pi pi-plus-circle',
    },
  ]);

  private readonly baseItemsCuenta = signal<MenuItem[]>([
    {
      label: 'Mi perfil',
      icon: 'pi pi-user',
    },
    {
      label: 'Mis servicios',
      icon: 'pi pi-briefcase',
    },
    {
      label: 'Configuración',
      icon: 'pi pi-hammer',
    },
    {
      label: 'Ayuda',
      icon: 'pi pi-question-circle',
    },
    { separator: true },
    {
      label: 'Cerrar sesión',
      icon: 'pi pi-sign-out',
    },
  ]);

  private readonly mobileItemsCuenta = signal<MenuItem[]>([
    {
      label: 'Gasfitería',
      icon: 'pi pi-tools',
    },
    {
      label: 'Albañilería',
      icon: 'pi pi-building',
    },
    {
      label: 'Herrería',
      icon: 'pi pi-shield',
    },
    {
      label: 'Mecánica',
      icon: 'pi pi-car',
    },
  ]);

  readonly itemsCuenta = computed<MenuItem[]>(() => {
    const baseItems = this.baseItemsCuenta();
    if (this.isMediumMobile()) {
      return [
        { label: 'Cuenta', items: baseItems },
        { label: 'Servicios', items: this.itemsServicios() },
      ];
    } else {
      return baseItems;
    }
  });
  expandItemsCuenta() {}
}
