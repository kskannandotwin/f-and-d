import { Component } from '@angular/core';

@Component({
  selector: 'app-storage',
  imports: [],
  templateUrl: './storage.component.html',
  styleUrl: './storage.component.scss',
})
export class StorageComponent {

  sessionValue: string = '';
  setSession() {
    sessionStorage.setItem('name', 'session');
    sessionStorage.setItem('pass', 'session123');
  }

  getSession() {
    this.sessionValue = sessionStorage.getItem('name') ?? '';
  }

  removeSession() {
    sessionStorage.removeItem('pass');
  }

  clearSession() {
    sessionStorage.clear();
    this.sessionValue = '';
  }
}
