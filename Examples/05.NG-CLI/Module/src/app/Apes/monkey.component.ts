import { Component, Input } from '@angular/core';
import { PokeService } from './services/poke.service';

@Component({
    selector: 'app-monkey',
    template: `
        <h1>I'm monkey {{name}}</h1>
        <app-tail [length]=12></app-tail>
        <button (click)='poke()'>Click me</button>
    `
})
export class MonkeyComponent {
    constructor(private pokeService: PokeService) {

    }

    @Input()
    public name = 'Chi-chi-chi';

    poke(): void {
        this.pokeService.poke();
    }
}
