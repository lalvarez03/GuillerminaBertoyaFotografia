import { Component } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
}
