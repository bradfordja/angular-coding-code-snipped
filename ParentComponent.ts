// child.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<h1>{{ message }}</h1>',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() message: string;
}


// parent.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: '<app-child [message]="message"></app-child>',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  message = 'Hello from Parent!';
}
