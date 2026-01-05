import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { Password } from 'primeng/password';

@Component({
  selector: 'app-register-dialog',
  imports: [
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    Password,
    InputText,
  ],
  templateUrl: './register-dialog.html',
  styleUrl: './register-dialog.scss',
})
export class RegisterDialogComponent {
  private readonly fb = inject(FormBuilder);

  protected formRegister!: FormGroup;

  ngOnInit(): void {
    this.loadFormRegister();
  }

  private loadFormRegister(): void {
    this.formRegister = this.fb.group({
      nombres: this.fb.control<string | null>('', [Validators.required]),
      apellidos: this.fb.control<string | null>('', [Validators.required]),
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
