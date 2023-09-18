import { Component } from '@angular/core';
import { Calciatore } from "../models/calciatore";
import {CALCIATORI} from "../dati/serie_a";

@Component({
  selector: 'app-calciatori',
  templateUrl: './calciatori.component.html',
  styleUrls: ['./calciatori.component.css']
})
export class CalciatoriComponent {
  calciatori: Calciatore[] = CALCIATORI;

  calciatoreSelezionato?: Calciatore;

  seleziona(calciatore?: Calciatore) {
    this.calciatoreSelezionato = calciatore;
  }
}

