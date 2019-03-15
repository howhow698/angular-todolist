import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TODOS } from '../../mock-todoitems';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  todos = TODOS;
  apptitle = 'My To Do List'
  placeholderText = 'Title...';
  newTodoText= '';
  
  toggleItemState(todo) {
    todo.iscompleted = !todo.iscompleted;
  }

  changeItemClass(todo){
    let indexremainder = this.todos.indexOf(todo) % 2;
    let even: boolean ;

    even = (indexremainder == 0) ? true : false ;
  
    let classes = {
      'isCompleted': todo.iscompleted,
      'eventodoitem': even
    };
    return classes
  }
  
  inputTodoItemText($event) {
    this.newTodoText = $event.target.value;
    // console.log(this.newTodoText);
  }

  addTodoItem() {
    let newTodoItem = {  
                        content: this.newTodoText, 
                        iscompleted: false } 
    this.todos.push(newTodoItem);
    // console.log(this.todos);    
  }

  deleteItem(todo) {
    let removeIndex = this.todos.indexOf(todo);
    this.todos.splice(removeIndex, 1 );
    // console.log(this.todos);
  }

  constructor() { }
  ngOnInit() { }

}

