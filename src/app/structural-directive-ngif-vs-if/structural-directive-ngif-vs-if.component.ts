import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive-ngif-vs-if',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive-ngif-vs-if.component.html',
  styleUrls: ['./structural-directive-ngif-vs-if.component.scss'],
})
export class StructuralDirectiveNgifVsIfComponent {
  isChecked: boolean = false;
  isInpuBox: boolean = true;
  input1: string = '';
  input2: string = '';

  onClick() {
    this.isChecked = !this.isChecked;
  }

  showField() {
    this.isInpuBox = true;
  }

  hideField() {
    this.isInpuBox = false;
  }
}
