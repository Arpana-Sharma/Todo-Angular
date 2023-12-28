import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-form-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-todo.component.html',
  styleUrl: './form-todo.component.css'
})
export class FormTodoComponent {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  title!: string;
  desc!: string;
  onSubmit() {
      const todo = {
        sno: 8,
        title: this.title,
        desc: this.desc,
        active: true
      }
      this.todoAdd.emit(todo);
      this.title = "";
      this.desc = "";
  }
}
