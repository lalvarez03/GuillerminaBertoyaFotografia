import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaDeFotos!:string[];
  constructor(
    private router:Router,
    private appService:AppService
  ) { }

  ngOnInit() {
    this.listaDeFotos = this.appService.listarArchivosEnCarpeta('src/assets/New_Born')
    console.log(this.listaDeFotos)
  }

  aNewBorn(){
    this.router.navigate(['newBorn'])
  }
  aPrimerAnio(){
    this.router.navigate(['primerAnio'])
  }
  aEmbarazadas(){
    this.router.navigate(['embarazadas'])
  }
}
