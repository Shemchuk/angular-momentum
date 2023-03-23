import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit, OnDestroy {
  @Input() currentName: string = '';

  currentDate?: Date;
  dateInterval?: NodeJS.Timer;

  ngOnInit():void {
    this.dateInterval = setInterval(() => {
      this.currentDate = new Date();
    }, 1000 )
  }

  ngOnDestroy(): void {
    clearInterval( this.dateInterval );
  }
}
