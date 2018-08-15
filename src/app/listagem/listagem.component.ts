import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FotoService } from '../foto/foto.service';
import { Foto } from '../foto/foto';

@Component({
  selector: 'caelumpic-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  listaFotos: Foto[] = []

  //constructor(conexaoApi: HttpClient){
  //console.log("testeeeeeeeeeeeeee....")
  constructor(private servico: FotoService) {

    this.servico
      .listar().subscribe(

        (fotosApi) => {
          //console.log(fotosApi)
          this.listaFotos = fotosApi;
        }

      )
  }

  ngOnInit() {
  }

  apagar(fotoApagada: Foto) {

    this.servico
      .deletar(fotoApagada)
      .subscribe(
        () => {
          console.log(fotoApagada)

          //percorrer listaFotos, encontrar a fotoApagada
          //remover a fotoApagada de listaFotos

          this.listaFotos = this.listaFotos
            .filter(foto => {
              if (foto != fotoApagada) {
                return foto
              }
            })

          //this.listaFotos = this.listaFotos.filter(foto => foto != fotoApagada)

        }
        , erro => console.log(erro)

      )
  }
  /*conexaoApi.get('http://localhost:3000/v1/fotos').subscribe(

    (fotosApi) => {
      //console.log(fotosApi)
      this.listaFotos = fotosApi;
    }

  );*/



}
