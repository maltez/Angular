import { Component } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public inpMain = 'default';
  public header: string = 'Hello react!';
  title = 'app';

  public handler(inp): void {
    this.header = inp;
  }
}
