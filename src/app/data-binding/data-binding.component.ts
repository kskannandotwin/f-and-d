import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

    dummyData: any;
    isEligible: boolean;
    constructor(private _sharedData: SharedDataService) {
      this.dummyData = this._sharedData.userData;
      this.isEligible = this._sharedData.isEligibleForSubscription();
    }
  // name: string = 'FED Learning';
  // topic: string = 'Data Binding';
  // image: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  // random: string = '';

  // onSave() {
  //   alert('Data saved successfully!');
  // }

  // onChange() {
  //   alert('Country has changed!');
  // }
}
