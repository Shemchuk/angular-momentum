import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent {
  @Output() submitUser = new EventEmitter<string>;
  @Input() enteredName = '';

  submitUserName(): void {
    this.submitUser.emit(this.enteredName);
    this.enteredName = '';
  }
}
