import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-PrimerAño',
  templateUrl: './PrimerAño.component.html',
  styleUrls: ['./PrimerAño.component.css']
})
export class PrimerAñoComponent implements OnInit {
  listaDeFotos!:string[];
  constructor(
    private appService:AppService
  ) { }

  ngOnInit() {
    this.listaDeFotos = this.appService.listarArchivosEnCarpeta('src/assets/New_Born')
    console.log(this.listaDeFotos)
  }
}
