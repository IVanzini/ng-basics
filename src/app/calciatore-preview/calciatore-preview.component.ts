import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Calciatore } from '../models/calciatore';

@Component({
  selector: 'app-calciatore-preview',
  templateUrl: './calciatore-preview.component.html',
  styleUrls: ['./calciatore-preview.component.css']
})
export class CalciatorePreviewComponent implements OnInit {
  
  ngOnInit(): void {
    console.log("caricato");
    // setInterval(() => {this.onCalciatoreSelezionato.emit(this.calciatore)}, this.delay);
  }
  @Input()
  calciatore?: Calciatore;

  @Input()
  delay?: number;

  @Input()
  dispari?: boolean;

  @Output()
  onCalciatoreSelezionato = new EventEmitter<Calciatore>();

  constructor() {
    console.log("Istanziato");
  }

  seleziona(){
    
    console.log(this.calciatore?.nome_completo);//o this.calciatore! se sono sicuro che non sarà null
    this.onCalciatoreSelezionato.emit(this.calciatore);
  }
}
