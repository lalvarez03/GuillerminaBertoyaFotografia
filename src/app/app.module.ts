import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NewBornComponent } from './NewBorn/NewBorn.component';
import { CarrousselComponent } from './carroussel/carroussel.component';
import { EmbarazadasComponent } from './Embarazadas/Embarazadas.component';
import { PrimerAñoComponent } from './PrimerAño/PrimerAño.component';
import { HomeComponent } from './Home/home.component';
import { CarrousselClientesComponent } from './carroussel-clientes/carroussel-clientes.component';
import { HammerModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SobreMiComponent } from './SobreMi/SobreMi.component';
import { ModalComponent } from './modal/modal.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [				
    NewBornComponent,
    EmbarazadasComponent,
    PrimerAñoComponent,
    HomeComponent,
    CarrousselComponent,
    CarrousselClientesComponent,
    SobreMiComponent,
    ModalComponent
   ],
  imports: [
    CommonModule
  ],
  exports: [
    NewBornComponent,
    CarrousselComponent,
    CarrousselClientesComponent,
    ModalComponent
  ]
})
export class AppModule { }
