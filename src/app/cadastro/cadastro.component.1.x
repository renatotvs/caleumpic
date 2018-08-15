import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensagem } from '../mensagem/mensagem';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'caelumpic-cadastro',
  templateUrl: './cadastro.component.1.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  /*foto = {
    titulo: 'caelum',
    url: '',
    descricao: ''
  }*/

  foto = new Foto();

  mensagem = new Mensagem();

  formCadastro: FormGroup

  constructor(private servico: FotoService
              ,private rotaAtivada: ActivatedRoute
              ,private roteador: Router
            ) { }

  ngOnInit() {

    console.log(this.rotaAtivada)

    //usando o snapshot da rota (estatico)
    let fotoId = this.rotaAtivada.snapshot.params.fotoId

    if(fotoId){
      this.servico.pesquisar(fotoId)
          .subscribe(
              fotoApi => this.foto = fotoApi
          )
    }
  }

  /*salvar(eventoSubmit: Event){
    eventoSubmit.preventDefault()
    console.log("Salveeeeeeeeeeeee...")
  }*/

  salvar(formCadastro, NgForm){

    if(this.foto._id){

    this.servico
        .cadastrar(this.foto)
        .subscribe(
          () => { console.log(`${this.foto.titulo} atualizada com sucesso`);

          this.mensagem.texto = `${this.foto.titulo} atualizada com sucesso`;
          this.mensagem.tipo = "success"
          setTimeout(
            () => this.roteador.navigate(['']),
            2000
          )

          //this.roteador.navigate([''])
          }
        )

        console.log(this.foto);
        console.log("Salveeeeeeeeeeeee...")
    
      }else{

        this.servico
        .cadastrar(this.foto)
        .subscribe(
          //(resposta) => console.log("Cadastrooooouuuuu....", resposta)
          () => {
            this.mensagem.texto =`${this.foto.titulo} cadastrado com sucesso`
            this.mensagem.tipo = "success"
            this.foto = new Foto()
            formCadastro.reset()
          }
        )

      }
  }

}
