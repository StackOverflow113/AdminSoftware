import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncresementComponent } from './incresement/incresement.component';
import { FormsModule } from '@angular/forms';
import { DonutComponent } from './donut/donut.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    IncresementComponent,
    DonutComponent
  ],
  exports: [
    IncresementComponent,
    DonutComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
  ]
})
export class ComponentsModule { }
