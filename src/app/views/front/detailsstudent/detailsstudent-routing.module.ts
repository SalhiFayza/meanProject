import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsstudentComponent } from './detailsstudent/detailsstudent.component';

const routes: Routes = [
  {path:'',component:DetailsstudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsstudentRoutingModule { }
