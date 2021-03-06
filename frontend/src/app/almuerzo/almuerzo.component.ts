import { Component, Input, OnInit } from '@angular/core';
import { Dia } from '../modelos/dia';

@Component({
  selector: 'app-almuerzo',
  templateUrl: './almuerzo.component.html',
  styleUrls: ['./almuerzo.component.scss']
})
export class AlmuerzoComponent implements OnInit {


  @Input()
  dia: Dia = new Dia();
  
  constructor() { }

  ngOnInit(): void {
  }

  eliminarAlmuerzo(dia: Dia): void{
    dia.almuerzo = undefined;
  }

}
