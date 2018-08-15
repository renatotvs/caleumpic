

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Foto } from "./foto";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FotoService{

    url = 'http://localhost:3000/v1/fotos/'

    //injetar a conexao
    constructor(private conexaoApi: HttpClient){}

    listar(): Observable<Foto[]>{
        return this.conexaoApi.get<Foto[]>(this.url)
    }

    cadastrar(foto: Foto){
        return this.conexaoApi.post(this.url, foto)
    }

    atualizar(fotoId: Foto){
        //return this.conexaoApi.put()
    }

    deletar(foto: Foto){
        return this.conexaoApi.delete(this.url+foto._id)
    }

    pesquisar(fotoId: string): Observable<Foto>{
        return this.conexaoApi.get<Foto>(this.url+fotoId)
    }

}