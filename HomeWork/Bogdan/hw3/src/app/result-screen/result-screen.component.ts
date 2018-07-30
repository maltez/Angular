import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-result-screen',
    templateUrl: './result-screen.component.html',
    styleUrls: ['./result-screen.component.css']
})
export class ResultScreenComponent implements OnInit {
    @Input()
    value: number = 0;

    constructor() {
    }

    ngOnInit() {
    }

}
