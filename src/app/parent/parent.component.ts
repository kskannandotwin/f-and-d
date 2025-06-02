import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Sibling1Component } from '../sibling1/sibling1.component';
import { Sibling2Component } from '../sibling2/sibling2.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, Sibling1Component, Sibling2Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  parentProperty: string = 'This is the parent component data';
  receiveMessage: string = '';
  sibling1Data: any = '';
  sibling2Data: any = '';

  receiveData(data: any) {
    this.receiveMessage = data;
  }

  receiveEvent1(data: any) {
    this.sibling1Data = data;
    console.log(this.sibling1Data);
  }

  receiveEvent2(data: any) {
    this.sibling2Data = data;
    console.log(this.sibling2Data);
  }
}
