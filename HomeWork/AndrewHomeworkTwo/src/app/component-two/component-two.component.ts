import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-two',
  template: `<div><h1 *ngIf="event">{{ event.key }}</h1><div>`
})
export class ComponentTwoComponent implements OnInit {

  @Input() event: Event;

  constructor() { }

  ngOnInit() {
  }

}
