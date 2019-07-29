import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url = 'http://loiane.com';
  cursoAngular = true;
  urlImagem = 'http://lorempixel.com/400/200/';
  urlImagem2 = 'http://lorempixel.com/400/200/';

  valorAtual = '';
  valorSalvo = '';

  isMouseOver = false;
  valorInicial = 15;

  nomeDoCurso = 'Angular';

  getValor() {
    return 1;
  }

  getCursoAngular() {
    return true;
  }

  botaoClicado() {
    alert('Botao clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (evento.target as HTMLInputElement).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  constructor() {}

  ngOnInit() {}
}
