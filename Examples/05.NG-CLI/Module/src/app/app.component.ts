import { Component } from '@angular/core';
import { PokeService } from './Apes/services/poke.service';

@Component({
  selector: 'app-root',
  template: `
    <button (click)='cry()' >F***ng magic</button>
    <app-monkey [name]=monkeyName></app-monkey>
  `
})
export class AppComponent {
    constructor(private pokeService: PokeService) {
    }

    public monkeyName = 'Grigoriy';
    cry(): void {
      this.pokeService.poke();
    }
}
