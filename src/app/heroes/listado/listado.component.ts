import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
//El ngOnInit usualmente se lo utiliza para inicializar cosas
export class ListadoComponent{//OnInit es la primera instancia del ciclo de vida que se puede ver en angular
  heroes:string[]=['Spiderman','Ironman','Hulk','Thor','Capitán América'];
  heroeBorrado:string='';
  borrarHeroe(){
    console.log('borrando...');
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }
}
