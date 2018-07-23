import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
              <app-component-one (eventInput)="childEventInput($event)"></app-component-one> 
              <app-component-two  [event]="inputEvent"></app-component-two>
            `
})
export class AppComponent {
  title = 'app';

  public inputEvent: Event;

  childEventInput(event: Event) {
    this.inputEvent = event;
  }
}
