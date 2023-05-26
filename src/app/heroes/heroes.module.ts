import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[//las declaraciones son los componentes que tiene 
        HeroeComponent,
        ListadoComponent    
    ],
    exports:[//define lo que se quiere hacer visible fuera del modulo
        ListadoComponent
    ],
    imports:[
        CommonModule //ofrece el uso de directivas como ngIf y ngFor
    ]
})
export class HeroesModule{
}