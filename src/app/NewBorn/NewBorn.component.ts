import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-NewBorn',
  templateUrl: './NewBorn.component.html',
  styleUrls: ['./NewBorn.component.css']
})
export class NewBornComponent implements OnInit {
  listaDeFotos!:string[];
  constructor(
    private appService:AppService
  ) { }

  ngOnInit() {
    this.listaDeFotos = this.appService.listarArchivosEnCarpeta('src/assets/New_Born')
    console.log(this.listaDeFotos)
  }
}
