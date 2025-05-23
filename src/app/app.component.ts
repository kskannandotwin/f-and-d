import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // UserComponent,
    // DataBindingComponent,
    DirectivesComponent],
import { UserComponent } from './user/user.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'f-and-d';
}
