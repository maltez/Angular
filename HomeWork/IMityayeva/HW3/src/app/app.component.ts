import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public numbers: Array <string> = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  public operations: Array <string> = ['+', '-', '*', '/'];
  public result: string = '';

  public numberHandler($event: string): void {
    this.result += $event.toString();
  }

  public operationHandler($event: string): void {
    this.result += $event.toString();
  }

  public countTotal(): void {
    this.result = eval(this.result)
  }

  public clearDisplay(): void {
    this.result = ''
  }
}
