
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'caelumpic-mensagem',
  template: `
    <p class="alert alert-{{tipo}}" role="alert">
      {{texto}}
    </p>
  `,
  styles: []
})
export class MensagemComponent implements OnInit {

  //Input torna o atributo como atributo HTML
  @Input() tipo = 'primary'
  @Input() texto = ''

  constructor() { }

  ngOnInit() {
  }

}
