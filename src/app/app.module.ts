import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NewBornComponent } from './NewBorn/NewBorn.component';
import { CarrousselComponent } from './carroussel/carroussel.component';
import { EmbarazadasComponent } from './Embarazadas/Embarazadas.component';
import { PrimerAñoComponent } from './PrimerAño/PrimerAño.component';

@NgModule({
  declarations: [
    NewBornComponent,
    EmbarazadasComponent,
    PrimerAñoComponent,
    CarrousselComponent
  ],
  imports: [
    CommonModule // Importa CarrousselModule
  ],
  exports: [
    NewBornComponent,
    CarrousselComponent
  ]
})
export class AppModule { }
