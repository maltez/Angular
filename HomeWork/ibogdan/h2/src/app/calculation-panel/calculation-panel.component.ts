import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
    selector: 'app-calculation-panel',
    templateUrl: './calculation-panel.component.html',
    styleUrls: ['./calculation-panel.component.css']
})
export class CalculationPanelComponent implements OnInit {
    public numberOne: number;
    public numberTwo: number;
    public result: number;

    constructor() {
    }

    ngOnInit() {
    }

    //@todo ask Nick
    numberChanged(num: number) {
        console.log(num);
        console.log(typeof num);
        this.result = num;
    }
}
