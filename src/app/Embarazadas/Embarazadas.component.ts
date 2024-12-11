import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-Embarazadas',
  templateUrl: './Embarazadas.component.html',
  styleUrls: ['./Embarazadas.component.css']
})
export class EmbarazadasComponent implements OnInit {
  listaDeFotos!:string[];
  constructor(
    private appService:AppService
  ) { }

  ngOnInit() {
    this.listaDeFotos = this.appService.listarArchivosEnCarpeta('src/assets/Embarazadas')
    console.log(this.listaDeFotos)
  }
}
