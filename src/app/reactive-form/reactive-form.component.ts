import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(15)]],
      password: ['', [Validators.required]],
      isChecked: [''],
      address: this.fb.group({
        city: [''],
        street: [''],
        pincode: [''],
      }),
      skills: this.fb.array([])
    });

    this.reactiveForm.controls['isChecked'].disable();
  }

  get skills(): FormArray {
    return this.reactiveForm.get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: ''
    });
  }

  addSkill() {
    this.skills.push(this.newSkill());
  }

  deleteSkill(index: number) {
    this.skills.removeAt(index);
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
