import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-number-keyboard',
    template: `
        <input
                style="width: 100px"
                (change)="$event"
                min="0"
                max="9"
                type="number"
                [(ngModel)]='numberVal'
        >`
    ,
    inputs: ['numberVal']
})
export class NumberKeyboardComponent implements OnInit {
    @Input()
    numberVal: number;

    @Output()
    change: EventEmitter<number> = new EventEmitter<number>();

    constructor() {
    }

    public ngOnInit(): void {
    }

    //@todo ask Nick numberChanged($event.target.value)
    numberChanged(value: string) {
        console.log(value);

        let num = parseInt(value, 10);

        if (num < 0) {
            num = 0;
        } else if (num > 9) {
            num = 9;
        } else if (isNaN(num)) {
            num = 0;
        }

        this.numberVal = num;
        this.change.emit(num);
    }
}
