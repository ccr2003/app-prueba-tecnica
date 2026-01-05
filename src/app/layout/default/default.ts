import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header';

@Component({
  selector: 'app-default',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './default.html',
  styleUrl: './default.scss',
})
export class DefaultComponent {}
