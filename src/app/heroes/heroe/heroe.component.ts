import { Component } from '@angular/core';


@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{
    nombre:string = 'Ironman';
    edad: number = 45;

    //get permite crear una propiedad procesada
    get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
    }
    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }
    cambiarEdad():void{
        console.log('hey...');
        this.edad = 30;
    }
}

//one way data binding (enlazado en una sola vía)