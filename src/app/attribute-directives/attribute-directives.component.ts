import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.scss',
})
export class AttributeDirectivesComponent {
  // 1
  textColor: string = 'text-success';

  changeColor(color: string) {
    this.textColor = color;
  }

  // 2
  isTextGreen: boolean = false;

  isTextOrange: boolean = false;

  // 3
  userClass: string = '';

  styleColor: string = 'orange';

  updateColor(ngStyleColor: string) {
    this.styleColor = ngStyleColor;
  }

  customClass: any = {
    'color': 'yellow',
    'font-weight': 'bold',
    'font-size': '20px',
    'height': '150px',
    'width': '400px',
    'border': '2px solid black'
  };
}
