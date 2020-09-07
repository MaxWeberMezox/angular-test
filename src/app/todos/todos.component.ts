import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {publish} from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public todosClass = 'purple';

  constructor() {
    setTimeout(() => {
      this.todosClass = 'black';
      setTimeout(() => {
        this.todosClass = 'green';
      }, 2000);
    }, 2000);
  }

  ngOnInit(): void {
  }

  onChange(id: number): void {
    // this.eventToggle.emit(id);
  }
}
