import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tail',
    template: `
        <p>{{tailSymbols}}</p>
    `
})
export class TailComponent {
    @Input()
    public length = 1;

    get tailSymbols(): string {
        return '*'.repeat(this.length);
    }
}
