import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'hello-world',
    template: `
        <h1>{{hello}}</h1>
        <h1 *ngIf="isShow">I hate vue.js</h1>
        <input #inp  type="text" (input)="isProduction = inp.value" [value]="isProduction"/>
        <input type="text" [(ngModel)]="hello" />
        <h2>{{isProduction}}</h2>
        <button (click)="clickHandler()">Click Me</button>
        <button (click)="hateHandler()">{{hate}}</button>

        <input (input)="handler($event)" [(ngModel)]='isProduction'/>
        `,
})
export class NewComponent {
    @Output()
    public inputVal: EventEmitter<string> = new EventEmitter();

    @Input()
    public hello = 'hello';
    public isProduction = 'true';
    public isShow = true;
    public hate = 'I hate vue.js';

    public clickHandler(): void {
        this.isProduction = 'NOOOOOOOOOOO!';
    }

    public hateHandler(): void {
        this.isShow = !this.isShow;
        this.hate = !this.isShow ? 'I love angular' : 'I hate vue.js';
    }

    public handler($event): void {
        this.inputVal.emit(this.is);
    }

}
