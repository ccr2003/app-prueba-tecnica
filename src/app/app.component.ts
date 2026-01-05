import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected title = 'app-prueba-tecnica';

  constructor() {
    const todayDate = new Date().toDateString();
    console.log(`ConstructorApp - ${todayDate}`);
  }
}
