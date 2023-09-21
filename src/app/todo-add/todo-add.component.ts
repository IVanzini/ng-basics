import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  text: string = "";

  @Output()
  onRichiestaInserimento = new EventEmitter<string>();

  richiediInserimento() {
    if (this.text.trim().length > 0) {
    this.onRichiestaInserimento.emit(this.text);
    } 
    this.text = "";
    
  }
}
