import { Component } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { AppService } from './app.service';
import { AppModule } from './app.module';
import { fotosHome } from './environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    AppService
  ] //Los services van acá
})
export class AppComponent {
  title = 'regalo-mama';
  logo!:string;
  
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
    this.router.navigate(["home"])
  }

  public toNewBorn(){
    this.router.navigate(["newBorn"])
  }

  public toPrimerAnio(){
    this.router.navigate(["primerAnio"])
  }
  
  public toEmbarazadas(){
    this.router.navigate(["embarazadas"])
  }
}
