import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { fotosNewBorn } from '../environment';

@Component({
  selector: 'app-NewBorn',
  templateUrl: './NewBorn.component.html',
  styleUrls: ['./NewBorn.component.css'],
})
export class NewBornComponent implements OnInit {
  clase="New_Born"
  listaDeFotos!:string[];
  constructor(
    private appService:AppService
  ) { }

  async ngOnInit() {
    await this.setFotos()
    console.log(this.listaDeFotos)
  }

  setFotos(){
    this.listaDeFotos = fotosNewBorn.map(foto => 
      `assets/${this.clase}/${foto}.jpg`
    );
  }
}
