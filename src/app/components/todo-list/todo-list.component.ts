import { Component } from '@angular/core';
import { TodoModel } from 'src/app/models/todo.model';
import { mockTodoList } from '../../constants/todo.constant';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  newTodoItem = '';
  todoItems: TodoModel[] = mockTodoList;

  submitTodo() {
    if (!this.newTodoItem) return;

    this.todoItems = this.todoItems.concat({
      id: this.todoItems.length,
      title: this.newTodoItem,
      status: 'todo',
      completed: false,
    });

    this.newTodoItem = '';
  }
}
