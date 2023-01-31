import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent {
  toDisplay = true;
  count: number = 0;
  clickLog: number[] = [];

  toggleData() {
    this.toDisplay = !this.toDisplay;
  }

  saveClicks(): void{
    this.count++
    this.clickLog.push(this.count);
    }

}