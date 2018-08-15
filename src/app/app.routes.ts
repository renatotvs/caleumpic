import {Routes, RouterModule} from "@angular/router";
import { ListagemComponent } from "./listagem/listagem.component";
import { CadastroComponent } from "./cadastro/cadastro.component";

const rotasApp:Routes = [
    {path: '', component: ListagemComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'editar/:fotoId', component: CadastroComponent},
    {path: '**', redirectTo: ''}
]

//Configura o módulo de roteamento
export const ModuloRoteamento = RouterModule.forRoot(rotasApp)

