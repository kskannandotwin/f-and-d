import { ChangeDetectionStrategy, Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsComponent {
  // count = 0; // normal variable
  normalCounter = 0; // normal variable
  counter = signal(0); // signal variable
  // counter: WritableSignal<number> = signal(0);

  constructor() {
    this.counter.set(5); // Initialize the signal
    // setTimeout(() => {
    //   // this.normalCounter = 50; 
    //   this.counter.set(30); // Update the signal after 2 seconds
    //   console.log('Counter value => ', this.counter());
    // }, 5000);

    effect(() => {
      console.log('The value of couner is => ' +   this.counter());
    });
    // effect(() => {
    //   console.log('Normal Counter value => ', this.normalCounter);
    // });
  }

  onIncrement() { 
    // this.count++; // normal variable increment
    this.counter.update(initValue => initValue + 1); // signal variable increment
  }
}
