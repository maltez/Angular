import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-number-button',
  templateUrl: './number-button.component.html',
  styleUrls: ['./number-button.component.css']
})
export class NumberButtonComponent implements OnInit {
  @Input()
  buttonLabel: string;

  constructor() { }

  ngOnInit() {
  }

}
