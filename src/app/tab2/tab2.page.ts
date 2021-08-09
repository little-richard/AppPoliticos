import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PoliticoDetalheModal } from './politico-detalhe-modal/politico-detalhe-modal';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  listaRanking: any[] = [];

  constructor(private http: HttpClient, private modalController: ModalController) {
    
    this.http.get('https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome').subscribe((response:any) => {
        

        this.listaRanking = response.dados;

        console.log(response);
      });
      
    

  }


  async abrirModal(politico){

    const modalController = await this.modalController.create({
      component: PoliticoDetalheModal,
      componentProps: {politico: politico}
    });
    return await modalController.present();



  }

}
