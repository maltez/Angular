import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'number-button',
  template: `<button type="button" (click)="passNumber($event)" class="btn btn-secondary btn-lg" style="width: 48px;">{{ numberValue }}</button>`
})

export class NumberComponent {
  @Input()
  public numberValue: string;

  @Output()
  public clickNumber = new EventEmitter<string>();

  public passNumber($event): void {
    this.clickNumber.emit(this.numberValue);
  }
}
