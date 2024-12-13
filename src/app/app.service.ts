import { Injectable } from '@angular/core';
import * as fs from 'fs';
import * as path from 'path';

@Injectable({
  providedIn: 'root'
})
export class AppService {

constructor() { }

public listarArchivosEnCarpeta(rutaCarpeta: string): string[] {
  /*const listaArchivos: string[] = [];
  try {
    const archivos = fs.readdirSync(rutaCarpeta);
    archivos.forEach((archivo) => {
      const rutaCompleta = path.join(rutaCarpeta, archivo);
      if (fs.statSync(rutaCompleta).isFile()) {
        listaArchivos.push(archivo);
      }
    });
  } catch (error) {
    console.error('Error al leer la carpeta:', error);
  }
  return listaArchivos;*/
  return []
}
}
