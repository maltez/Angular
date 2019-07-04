import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h3>Pipe</h3>
  {{ greeting| morse }}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public greeting: string = 'Hello all';
}
