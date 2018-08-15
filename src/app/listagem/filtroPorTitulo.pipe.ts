import { Pipe, PipeTransform } from "@angular/core";
import { Foto } from "../foto/foto";

@Pipe({
    name: 'filtroPorTitulo'
})

export class FiltroPorTitulo implements PipeTransform{
    transform(listaFotos: Foto[], textoDigitado){
        console.log(listaFotos, textoDigitado)

        //==> faz callback
        return listaFotos.filter(
            foto => foto.titulo
                        .toLowerCase()
                        .includes(textoDigitado.toLowerCase()))

        /* return listaFotos.filter(foto => {
            if(foto.titulo.includes(textoDigitado)){
                return foto
            }
        }) */
    }
}