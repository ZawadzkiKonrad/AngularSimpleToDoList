import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';

  public todos: Todo[];

  constructor() {
    this.todos = [];
  }

  public addTodo(todo: Todo) {
    this.todos.unshift(todo);
  }

  public removeTodo(todo: Todo) {
    this.todos = this.todos.filter(item => item !== todo);
  }
}
