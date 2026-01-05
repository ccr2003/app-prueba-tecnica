import { Component, signal } from '@angular/core';
import { LoginDialogComponent } from '../login-dialog/login-dialog';
import { RegisterDialogComponent } from '../register-dialog/register-dialog';

@Component({
  selector: 'app-sign-view',
  imports: [LoginDialogComponent, RegisterDialogComponent],
  templateUrl: './sign-view.html',
  styleUrl: './sign-view.scss',
})
export class SignViewComponent {
  protected readonly INDEX_LOGIN = 1;
  protected readonly INDEX_REGISTER = 2;

  protected readonly selectedDialogKey = signal(this.INDEX_LOGIN);

  changeDialogKey($event: number) {
    this.selectedDialogKey.set($event);
  }
}
