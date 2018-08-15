import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensagem } from '../mensagem/mensagem';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgOnChangesFeature } from '../../../node_modules/@angular/core/src/render3';

@Component({
  selector: 'caelumpic-cadastro',
  templateUrl: './cadastro.component.html',
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
              ,private formBuilder: FormBuilder
            ) { }

  ngOnInit() {

    //para formulario reativo - Usando validators
    this.formCadastro = this.formBuilder.group({
      titulo: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])],
      url: ['', Validators.required],
      descricao: ''
      
    })

    console.log(this.rotaAtivada)

    //usando o snapshot da rota (estatico)
    let fotoId = this.rotaAtivada.snapshot.params.fotoId

    if(fotoId){
      this.servico.pesquisar(fotoId)
          .subscribe(
              fotoApi => {this.foto = fotoApi
              //new
              this.formCadastro.patchValue(fotoApi)
              }
          )
    }
  }

  /*salvar(eventoSubmit: Event){
    eventoSubmit.preventDefault()
    console.log("Salveeeeeeeeeeeee...")
  }*/

  

  get titulo(){
    return this.formCadastro.get("titulo")
  }

  get url(){
    return this.formCadastro.get("url")
  }

  get descricao(){
    return this.formCadastro.get("descricao")
  }

  salvar(){

    //use o spread operator (do JS) para criar um novo objeto a
    //partir de 2 que ja existem
    this.foto = {...this.foto, ...this.formCadastro.value} //mesclar os valores dos objetos de um lado pro outro

    this.foto = this.formCadastro.value

    console.log(this.foto)

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
            this.formCadastro.reset()
          }
        )

      }
  }

}
