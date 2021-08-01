import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  progress1: number = 100;
  progress2: number = 50;

  constructor() { }

  ngOnInit(): void {
  }

  get Percent() {
    return `${this.progress1}%`;
  }
  get Percent2() {
    return `${this.progress2}%`;
  }


}
