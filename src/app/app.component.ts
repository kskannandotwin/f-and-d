import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { StructuralDirectiveNgifVsIfComponent } from './structural-directive-ngif-vs-if/structural-directive-ngif-vs-if.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // UserComponent,
    // DataBindingComponent,
    // DirectivesComponent,
    StructuralDirectiveNgifVsIfComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'f-and-d';
}
