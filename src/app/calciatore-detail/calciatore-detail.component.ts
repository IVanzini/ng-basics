import { Component, Input } from '@angular/core';
import { Calciatore } from '../models/calciatore';

@Component({
  selector: 'app-calciatore-detail',
  templateUrl: './calciatore-detail.component.html',
  styleUrls: ['./calciatore-detail.component.css']
})
export class CalciatoreDetailComponent {
  @Input()
  calciatore?: Calciatore;
}
