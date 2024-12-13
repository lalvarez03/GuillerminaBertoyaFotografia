import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { fotosEmbarazadas } from '../environment';

@Component({
  selector: 'app-Embarazadas',
  templateUrl: './Embarazadas.component.html',
  styleUrls: ['./Embarazadas.component.css']
})
export class EmbarazadasComponent implements OnInit {
  clase="Embarazadas"
  listaDeFotos!:string[];
  constructor(
    private appService:AppService
  ) { }

  async ngOnInit() {
      await this.setFotos()
      console.log(this.listaDeFotos)
    }
  
  setFotos(){
    this.listaDeFotos = fotosEmbarazadas.map(foto => 
      'assets/' + this.clase + '/' + foto + '.jpg'
    );
  }
}
