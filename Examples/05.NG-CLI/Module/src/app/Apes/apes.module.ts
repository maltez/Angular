import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonkeyComponent } from './monkey.component';
import { TailComponent } from './tail.component';
import { PokeService } from './services/poke.service';

@NgModule({
    declarations: [ MonkeyComponent, TailComponent ],
    imports: [ CommonModule ],
    exports: [ MonkeyComponent ],
    providers: [
        { provide: PokeService, useClass: PokeService }
    ]
})
export class ApesModule {
}
