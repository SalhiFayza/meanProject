import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsstudentRoutingModule } from './detailsstudent-routing.module';
import { DetailsstudentComponent } from './detailsstudent/detailsstudent.component';


@NgModule({
  declarations: [
    DetailsstudentComponent
  ],
  imports: [
    CommonModule,
    DetailsstudentRoutingModule
  ]
})
export class DetailsstudentModule { }
