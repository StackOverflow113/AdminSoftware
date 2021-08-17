import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';
@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  public labels1: string[] = ['Bread', 'Soda', 'Tacos'];
  public data1 = [
    [10, 15, 40],
  ];
  public labels2: string[] = ['Consoles', 'Controls', 'Videogames'];
  public data2 = [
    [5, 30, 80],
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
