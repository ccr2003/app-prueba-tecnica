import { Component, computed, OnInit } from '@angular/core';
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
export class NavbarComponent {
  protected urlLogo: string =
    'https://contratalo.startupdev.tech/assets/svg/logo.svg';

  protected acItems: IAutoCompleteSearch = {
    placeholder: '¿Qué especialista estas buscando?',
  };

  protected btnServiciosItem: IButtonServicios = {
    icon: 'pi pi-chevron-down',
    label: 'Servicios',
  };

  readonly itemsServicios = computed<MenuItem[]>(() => [
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

  readonly itemsCuenta = computed<MenuItem[]>(() => [
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
}
