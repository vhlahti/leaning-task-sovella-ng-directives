import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent {
  toDisplay = true;
  count: number = 0;
  clickLog: any = [];
  listOfDates: Date[] = [];

  toggleData() {
    this.toDisplay = !this.toDisplay;
  }

  // v.1 - display numbers

 /*

  saveClicks() {
    this.count++;
    this.clickLog.push(this.count);
    }
  
   */

  // v.2 - display time stamp

  saveClicks() {
    this.count++;
    this.clickLog.push(this.count);
    this.listOfDates.push(new Date());
    }
  
}