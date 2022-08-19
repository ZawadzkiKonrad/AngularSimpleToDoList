import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';
import { TodoStatus } from '../todo-status';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() addTodo = new EventEmitter<Todo>();

  todo!: Todo;

  constructor() {
    this.setInitial();
  }


  public add(): void {
    //const { name, status } = this.todo;

   /*  if(name.length > 0) {
      this.todo.status = +status;
      this.addTodo.emit(this.todo);
      this.setInitial();
    } */

    if(this.todo.name.length == 0) {
      alert("wpisz cos");

    }else {
      this.addTodo.emit(this.todo);
      this.setInitial();
    }
  }

  private setInitial(): void {
    this.todo = {
      name: "",
      status: TodoStatus.TODO
    }
  }

  ngOnInit() {
  }

}
