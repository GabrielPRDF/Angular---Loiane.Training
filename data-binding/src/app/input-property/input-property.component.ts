import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
  //inputs: ['nomeCurso:nome'] não e uma boa pratica
})
export class InputPropertyComponent implements OnInit {
  //Melhor pratica
  @Input('nome') nomeCurso: string = '';
  //nomeCurso: string = '';

  constructor() {}

  ngOnInit() {}
}
