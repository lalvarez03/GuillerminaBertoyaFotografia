import { Routes } from '@angular/router';
import { SobreMiComponent } from './SobreMi/SobreMi.component';
import { EmbarazadasComponent } from './Embarazadas/Embarazadas.component';
import { PrimerAñoComponent } from './PrimerAño/PrimerAño.component';
import { NewBornComponent } from './NewBorn/NewBorn.component';
import { HomeComponent } from './Home/home.component';

export const routes: Routes = [
    { path: 'sobreMi', component: SobreMiComponent },
    { path: 'embarazadas', component: EmbarazadasComponent },
    { path: 'newBorn', component: NewBornComponent },
    { path: 'primerAnio', component: PrimerAñoComponent },
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent }
];
