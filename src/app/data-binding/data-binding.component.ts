import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  name: string = 'GitHub Copilot';
  age: number = 5;
  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  isDisabled: boolean = false;
  buttonClass: string = 'btn-primary';
  titleColor: string = 'blue';

  clickCount: number = 0;
  inputText: string = '';

  username: string = '';
  email: string = '';
  message: string = '';

  getAgePlusFive(): number {
    return this.age + 5;
  }

  onClick() {
    this.clickCount++;
    console.log('Button clicked!');
  }

  onMouseOver() {
    console.log('Mouse over event triggered');
  }

  onInputChange(event: any) {
    this.inputText = event.target.value;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    
    // Get all form values
    const formData = {
      username: this.username,
      email: this.email,
      message: this.message
    };
    
    console.log('Form Data:', formData);
    
    // Reset form fields after submission
    this.username = '';
    this.email = '';
    this.message = '';
  }
}
