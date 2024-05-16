// counter.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: '
    <!-- counter.component.html -->
    <div>
    <h1>{{ count }}</h1>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    </div>
    ',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
