import { Component } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { AppService } from './app.service';
import { AppModule } from './app.module';

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
  
  constructor(
    private router:Router,
  ){}

  public toHome(){
    this.router.navigate(["home"])
  }
  public carru(){
    this.router.navigate(["carru"])
  }
}
