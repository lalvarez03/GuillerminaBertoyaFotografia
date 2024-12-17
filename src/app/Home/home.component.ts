import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { fotosClientesFelices, fotosEmbarazadas, fotosHome, fotosPortfolio } from '../environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clase="Main";
  listaDeFotos!:string[];
  listaFotosPortfolio!:string[];
  listaFotosClientes!:[src:string,cliente:string,descripcion:string][];
  constructor(
    private router:Router
  ) { }

  async ngOnInit() {
      await this.setFotos()
      console.log(this.listaDeFotos)
    }
  
  setFotos(){
    this.listaDeFotos = fotosHome.map(foto => 
      'assets/' + this.clase + '/' + foto + '.jpg'
    );
    this.listaFotosPortfolio = fotosPortfolio.map(foto => 
      'assets/' + this.clase + '/Portfolio/' + foto + '.jpg'
    );
    this.listaFotosClientes = fotosClientesFelices.map(foto => 
      ['assets/' + this.clase + '/Clientes/' + foto[0] + '.jpg', foto[1], foto[2]]
    );
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
