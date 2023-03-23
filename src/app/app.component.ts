import { Component, OnDestroy, OnInit } from '@angular/core';
import { mockTodoList } from './components/todo.constant';
import { TodoModel } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentName = '';
  userNameSubmitted = false;

  private readonly localStorageKey = 'momentumUserName';

  ngOnInit():void {
    // TODO: move to a service
    const savedName = localStorage.getItem( this.localStorageKey );

    if ( savedName ) {
      this.currentName = savedName;
      this.userNameSubmitted = true;
    }
  }

  submitUserName( enteredName: string ): void {
    this.currentName = enteredName;
    this.userNameSubmitted = !!enteredName;
    localStorage.setItem( this.localStorageKey, this.currentName )
  }


}
