import {Injectable} from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}

setTimeout(() => {
  this.titleClass = 'blue';

  setTimeout(() => {
    this.titleClass = 'yellow';
  }, 2000);
}, 2000);

@Injectable({providedIn: 'root'})
export class TodosService {
  public todos: Todo[] = [
    {id: 1, title: 'Buy bread', completed: false, date: new Date()},
    {id: 2, title: 'Buy car', completed: true, date: new Date()},
    {id: 3, title: 'Buy house', completed: false, date: new Date()},
  ];
  eventToggle(id: number): void {
    const idx = this.todos.findIndex(t => t.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }
}
