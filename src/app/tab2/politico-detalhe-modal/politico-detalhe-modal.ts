import { Component, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';



@Component({
    selector: 'politico-detalhe-modal',
    templateUrl: 'politico-detalhe-modal.html',
    styleUrls: ['./politico-detalhe-modal.css']
})

export class PoliticoDetalheModal {
    dados:any;
   

    constructor(private http: HttpClient , private modalController: ModalController , public navParams: NavParams) {
        let politicoParams = navParams.get("politico")
        this.http.get(politicoParams.uri).subscribe((response:any) => {
        

            this.dados = response.dados;
    
            console.log(response);
          });
          

    }
}