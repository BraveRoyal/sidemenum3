import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private http: HTTP) { }

  mostraralerta(){
    alert('a')
  }
  categorias():any{
    return this.http.get('https://jsonplaceholder.typicode.com/photos',{},{});
  }
}
