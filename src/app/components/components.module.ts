import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncresementComponent } from './incresement/incresement.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IncresementComponent
  ],
  exports: [
    IncresementComponent
  ],

  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
