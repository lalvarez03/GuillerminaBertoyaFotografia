import { Component } from '@angular/core';
import { RouterOutlet,Router, RouterModule } from '@angular/router';
import { AppModule } from './app.module';
import { fotosHome } from './environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    AppModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
  ] //Los services van acá
})
export class AppComponent {
  title = 'regalo-mama';
  logo!:string;
  esHome=true;
  constructor(
    private router:Router,
  ){}

  async ngOnInit() {
    await this.setFotos()
  }
    
  setFotos(){
    this.logo = 'assets/Main/' + fotosHome[0] + '.jpg';
  }

  public toHome(){
    this.esHome=true;
    this.router.navigate(["home"])
  }

  toClientes(){
    this.router.navigate(["home"],{fragment:'clientes-felices'})
  }

  toSobreMi(){
    this.esHome=false;
    this.router.navigate(["sobreMi"])
  }

  public toNewBorn(){
    this.esHome=false;
    this.router.navigate(["newBorn"])
  }

  public toPrimerAnio(){
    this.esHome=false;
    this.router.navigate(["primerAnio"])
  }
  
  public toEmbarazadas(){
    this.esHome=false;
    this.router.navigate(["embarazadas"])
  }
}
