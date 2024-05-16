// form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  template: '
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
    <div>
        <label>
        Name:
        <input formControlName="name" type="text">
        </label>
    </div>
    <div>
        <label>
        Email:
        <input formControlName="email" type="email">
        </label>
    </div>
    <button type="submit">Submit</button>
    </form>
',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      email: ['']
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
