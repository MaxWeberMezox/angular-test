import {Component, OnInit} from '@angular/core';
import {TodosService} from '../shared/todos.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public loading = true;
  private searchString = '';
  constructor(public todosService: TodosService) {
}

  ngOnInit(): void {
    this.todosService.fetchTodos()
      .pipe(delay(2000))
      .subscribe(() => {
      this.loading = false;
    });
  }

  onChange(id: number): void {
    this.todosService.eventToggle(id);
  }
  removeTodo(id: number): void  {
    this.todosService.removeTodo(id);
  }
}
