import { CommonModule } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    OnDestroy
{
  constructor(private router: Router) {
    console.log('constructor called');
  }
  login() {
    // user verification logic
    // this.router.navigateByUrl('structural-directive');
    this.router.navigate(['structural-directive']);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('1. ngOnChanges called', changes);
  }

  ngAfterContentInit(): void {
    // use for ng content
    console.log('4. ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    console.log('5. ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    // use for view child
    console.log('6. ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    console.log('7. ngAfterViewChecked called');
  }

  ngOnInit(): void {
    // use for api call
    console.log('2. ngOnInit called');
  }

  ngDoCheck(): void {
    // use for every change detection
    console.log('3. ngDoCheck called');
  }

  ngOnDestroy(): void {
    console.log('8. ngOnDestroy called');
  }
}
