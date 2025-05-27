import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {
  reactiveForm: FormGroup;

  constructor() {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(),
      isChecked: new FormControl(true),
      address: new FormGroup({
        city: new FormControl(''),
        street: new FormControl(''),
        pincode: new FormControl(),
      }),
    });

    this.reactiveForm.controls['isChecked'].disable();
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
  }

  setAllValues() {
    this.reactiveForm.setValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@doe',
      password: '123456',
      isChecked: true,
      address: {
        city: 'New York',
        street: '5th Avenue',
        pincode: '10001',
      },
    });
  }
  setPartialValues() {
    // this.reactiveForm.patchValue({
    //   address: {
    //     city: 'Los Angeles',
    //     street: 'Sunset Boulevard',
    //     pincode: '90001'
    //   },
    // })

    this.reactiveForm.controls['firstName'].patchValue('Jane');

  }  
  resetForm() {
    // this.reactiveForm.reset();
    this.reactiveForm.controls['firstName'].reset();
  }
}
