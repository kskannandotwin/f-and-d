import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ngfor-vs-for',
  imports: [],
  templateUrl: './structural-directive-ngfor-vs-for.component.html',
  styleUrl: './structural-directive-ngfor-vs-for.component.scss'
})
export class StructuralDirectiveNgforVsForComponent {
  employees = [
    { empName: 'John', empNumber: 101 , empEmail: 'john@gmail.com', empDept: 'IT' },
    { empName: 'Jane', empNumber: 102 , empEmail: 'jane@gmail.com', empDept: 'HR' },
    { empName: 'Doe', empNumber: 103 , empEmail: 'doe@gmail.com', empDept: 'Sales' }
  ];

  companyList: string[] = [];
}
