import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-one',
  template: `<div>
              <input type="text" (keyup)="onInput($event)">
            <div>`
})
export class ComponentOneComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }

  @Output() eventInput = new EventEmitter<Event>();

  onInput(event: Event): void {
    this.eventInput.emit(event);
  }

}
