import { Component, Output, EventEmitter} from '@angular/core';
import { Todo } from '../../Todo';
import { Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent{
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter(); 
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter(); 
  OnClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("Onclick had been triggered");
  }
  onCheckboxClick(todo: Todo) {
    this.todoCheckBox.emit(todo);
  }
}
