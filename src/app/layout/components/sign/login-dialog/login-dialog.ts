import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Password } from 'primeng/password';
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'app-login-dialog',
  imports: [
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    Password,
    InputText,
  ],
  templateUrl: './login-dialog.html',
  styleUrl: './login-dialog.scss',
})
export class LoginDialogComponent {
  private readonly fb = inject(FormBuilder);

  protected formLogin!: FormGroup;

  ngOnInit(): void {
    this.loadFormLogin();
  }

  private loadFormLogin(): void {
    this.formLogin = this.fb.group({
      email: this.fb.control<string | null>('', [
        Validators.required,
        Validators.email,
      ]),
      password: this.fb.control<string | null>('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
}
