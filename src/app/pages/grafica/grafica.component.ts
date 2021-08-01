import { Component } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent {
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  constructor() { }

  ngOnInit(): void {
  }
  public colors: Color[] = [
    { backgroundColor: ['#0ed75c', '#edf44b', '#ea1f0f'] }
  ];
}
