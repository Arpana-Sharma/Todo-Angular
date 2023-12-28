import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { NgForOf } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { FormTodoComponent } from '../form-todo/form-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgForOf, TodoItemComponent, FormTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  toggleTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    if (typeof window !== 'undefined') {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }

  todos!: Todo[];
  localItem: string | null | undefined;
  constructor() {
    if (typeof window !== 'undefined') {
      this.localItem = localStorage.getItem('todos');
    }
    if (this.localItem == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localItem);
    }
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    if (typeof window !== 'undefined') {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }

  }
  todoAdd(todo: Todo) {
    this.todos.push(todo);
    if (typeof window !== 'undefined') {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }
}
