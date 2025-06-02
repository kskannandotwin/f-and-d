import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  parentProperty: string = 'This is the parent component data';
  receiveMessage: string = '';

  receiveData(data: any) {
    this.receiveMessage = data;
  }
}
