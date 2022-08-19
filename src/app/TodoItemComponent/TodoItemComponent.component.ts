import { Todo } from './../todo';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TodoStatus } from '../todo-status';

@Component({
  selector: 'app-TodoItemComponent',
  templateUrl: './TodoItemComponent.component.html',
  styleUrls: ['./TodoItemComponent.component.css']
})
export class TodoItemComponentComponent implements OnInit {



  @Output() removeTodo = new EventEmitter<Todo>();
  @Input()
  item!: Todo;
  get statusName(): string {
    const { status } = this.item;

    switch(status) {
      case TodoStatus.DONE: return "DONE";
      case TodoStatus.BUG: return "BUG";
      case TodoStatus.IN_PROGRESS: return "IN PROGRESS";
      case TodoStatus.IN_REVIEW: return "IN REVIEW";
      default: return "TODO";
    }
  }

  get classNames() {
    const statusName = this?.statusName?.split(" ")?.pop()?.toLowerCase();

    return {
      'status': true,
      [`status-${statusName}`]: true
    }
  }

  public remove(): void {
    this.removeTodo.emit(this.item);
  }

  constructor() { }

  ngOnInit() {
  }


}
