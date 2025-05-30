import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Iuser } from '../iuser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud',
  imports: [CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CRUDComponent implements OnInit {
  constructor(private crud: CrudService) {}

  apiData: Iuser[] = [];

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.crud.getData().subscribe((res) => {
      this.apiData = res;
    });
  }
}
