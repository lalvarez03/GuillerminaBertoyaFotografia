import { Component } from '@angular/core';
import { RouterOutlet,Router, RouterModule, NavigationEnd } from '@angular/router';
import { AppModule } from './app.module';
import { fotosHome } from '../environment';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

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
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        const contenedor = document.querySelector('#contenedor-principal');
        if (contenedor) {
          contenedor.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
  }
    
  setFotos(){
    this.logo = 'assets/Main/' + fotosHome[0] + '.jpg';
  }

  public toHome(){
    this.esHome=true;
    this.router.navigate(["home"])
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
