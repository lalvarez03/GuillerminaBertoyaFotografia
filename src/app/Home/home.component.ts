import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaDeFotos!:string[];
  constructor(
    private appService:AppService
  ) { }

  ngOnInit() {
    this.listaDeFotos = this.appService.listarArchivosEnCarpeta('src/assets/New_Born')
    console.log(this.listaDeFotos)
  }

  
}
