import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputText } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-detail-info',
  imports: [
    ButtonModule,
    DividerModule,
    InputGroupModule,
    InputGroupAddonModule,
    ReactiveFormsModule,
    FormsModule,
    InputText,
    TextareaModule,
  ],
  templateUrl: './detail-info.html',
  styleUrl: './detail-info.scss',
})
export class DetailInfoComponent {
  private readonly fb = inject(FormBuilder);

  protected formMensaje!: FormGroup;

  ngOnInit(): void {
    this.loadFormMensaje();
  }

  private loadFormMensaje(): void {
    this.formMensaje = this.fb.group({
      nombres: this.fb.control<string | null>('', [Validators.required]),
      email: this.fb.control<string | null>('', [
        Validators.required,
        Validators.email,
      ]),
      telefono: this.fb.control<string | null>('', [Validators.required]),
      mensaje: this.fb.control<string | null>('', [Validators.required]),
    });
  }
}
