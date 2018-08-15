
interface FotoInterface{
    _id: string,
    titulo:string,
    url:string,
    descricao:string;
}

export class Foto implements FotoInterface {
    _id = '';
    titulo = '';
    url = '';
    descricao = '';
}