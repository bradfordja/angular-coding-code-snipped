// conditional-rendering.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional-rendering',
  template: '
    <div>
    <button (click)="toggleVisibility()">
        {{ isVisible ? 'Hide' : 'Show' }}
    </button>
    <p *ngIf="isVisible">This is a conditionally rendered paragraph.</p>
    </div>
  ',
  styleUrls: ['./conditional-rendering.component.css']
})
export class ConditionalRenderingComponent {
  isVisible = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
