import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incresement',
  templateUrl: './incresement.component.html',
  styles: [
  ]
})
export class IncresementComponent implements OnInit {

  @Input('value') progress: number = 0;
  @Input() btnClass: string = 'btn btn-primary';


  @Output('value') outValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeValue(value: number) {
    if (this.progress >= 100 && value >= 0) {
      this.outValue.emit(100);
      return this.progress = 100;
    }
    if (this.progress <= 0 && value < 0) {
      this.outValue.emit(0);
      return this.progress = 0;
    }
    this.outValue.emit(this.progress);
    this.progress = this.progress + value;
  }

  onChange(newValue: number) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }
    this.outValue.emit(this.progress);
    console.log(this.progress)
  }

}
