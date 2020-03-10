import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertasService } from '../services/alertas.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  itens:any;

  constructor(private navCtrl:NavController,private danilo123:AlertasService) { }

  ngOnInit() {
    this.itens = this.danilo123.categorias();
  }
  abrirpagina(path){
    this.navCtrl.navigateForward(`/${path}`)
  }
}
