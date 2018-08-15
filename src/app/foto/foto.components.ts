import { Component, Input } from "../../../node_modules/@angular/core";

@Component({
    selector: 'foto',
    template: '<img [src]="url" [title]="titulo" class="card-img-top" />', //'<img src="assets/images/avanade-logo.jpg" alt="Avanade" />',
    styles: []
    //templateUrl: './foto.component.html'
})

export class FotoComponent {
    @Input() url = "";
    @Input() titulo = "";
}