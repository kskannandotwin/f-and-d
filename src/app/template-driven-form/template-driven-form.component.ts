import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent implements OnInit {

  userObject: User = {};

  onSubmit(userForm: NgForm) {
    console.log(userForm.value);
  }

  ngOnInit(): void {
    // this.userObject = {
    //   firstName: 'John',
    //   lastName: 'Doe',
    //   email: 'john@doe',
    //   pass: '123456',
    //   isCheck: true
    // }
  }

  setValues(userForm: NgForm) {
    let obj = {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@smith',
      pass: '12345',
      isCheck: true
    }
    userForm.setValue(obj);
    // or use patchValue to set only some fields
  }

  patchValues(userForm: NgForm) {
    let obj = {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@smith'
    }
    userForm.control.patchValue(obj);
    // This will only update the fields specified in obj
    // or use patchValue to set only some fields
  }

  resetValues(userForm: NgForm) {
    userForm.reset();
    // userForm.resetForm();
  }
}
