import { Component, Input } from "@angular/core";

@Component({
  selector: 'display',
  template: `<input type="text" class="form-control" value="{{ total }}" readonly/>`
})

export class DisplayComponent {
  @Input()
  public total: string;
}
