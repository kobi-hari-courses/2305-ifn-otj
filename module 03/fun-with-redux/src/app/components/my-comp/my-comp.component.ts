import { Component, Input, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.scss']
})
export class MyCompComponent {

  as = signal('');

  @Input()
  set a(value: string) {
      this.as.set(value);
  }

  constructor() {
    effect(() => console.log('My input is ', this.as()));
  }
  

}
