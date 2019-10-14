import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Todo } from '../interfaces/todo';

// const TODOS = 'todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos: Todo[] = [];

  constructor(private storage: Storage) {

  }

  load() {
    return new Promise((resolve) => {
      this.storage.get('todos');
      resolve(true);
    });
  }


  save() {
    this.storage.set('todos', this.todos);
  }


  getTodo(id) {
    return this.todos.find(todo => todo.id == id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.save();
  }


}
