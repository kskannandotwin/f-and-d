import { Component, HostListener, Input } from '@angular/core';

// class decorators
@Component({
  selector: 'app-reusable',
  imports: [],
  templateUrl: './reusable.component.html',
  styleUrl: './reusable.component.scss',
})
export class ReusableComponent {
  // property decorators
  @Input() childProperty: string = 'Hello All : Welcome to the FED Learning';

  // method decorators
  @HostListener('click')
  onClick() {
    console.log('Button clicked');
  }
}
