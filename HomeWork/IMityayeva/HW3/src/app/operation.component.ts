import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'operation-button',
  template: `<button type="button" (click)="passOperation($event)" class="btn btn-secondary btn-lg">{{ operationValue }}</button>`
})

export class OperationComponent {
  @Input()
  public operationValue: string;

  @Output()
  public clickOperation = new EventEmitter<string>();

  public passOperation($event): void {
    this.clickOperation.emit(this.operationValue);
  }
}
