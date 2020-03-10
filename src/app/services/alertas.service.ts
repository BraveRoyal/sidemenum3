import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor() { }

  mostraralerta(){
    alert('a')
  }
  categorias():any{
    return [
      {
        nome:'banco de dados',
        detalhe:'corre',
        icon:"man-outline",
        path:'banco-de-dados'
      },
      {
        nome:'lapis',
        detalhe:'escrever',
        icon:'pencil-outline',
        path:'login'
      },
      {
        nome:'camera',
        detalhe:'foto',
        icon:'camera-outline',
        path:'login'
      }
    ];
  }
}
