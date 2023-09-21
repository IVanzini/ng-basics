import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TODOS } from '../dati/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  ngOnInit(): void {
    setTimeout(() => { this.todos = TODOS; console.log(this.todos) }, 2000);
  }

  completa(todo: Todo) {
    const t = this.todos.find(t => t.id == todo.id);
    if (t) {
      t.completed = true;
    }
  }

  inserisci(text: string) {
    let todo: Todo = {
      id: new Date().getTime(),
      text: text,
      completed: false
    };
    this.todos.push(todo);
  }
}
