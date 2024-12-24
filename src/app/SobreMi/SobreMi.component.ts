import { Component, OnInit } from '@angular/core';
import { fotosHome } from '../environment';

@Component({
  selector: 'app-SobreMi',
  templateUrl: './SobreMi.component.html',
  styleUrls: ['./SobreMi.component.css']
})
export class SobreMiComponent implements OnInit {
  fotoMenu!:string;

  async ngOnInit() {
    await this.setFotos();
  }

  setFotos(){
      this.fotoMenu = `assets/Main/${fotosHome[1]}.jpg`;
  }
}
