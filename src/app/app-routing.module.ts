import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layout/auth-admin-layout/auth-admin-layout.component';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import { GarduserGuard } from './views/guards/garduser.guard';
import { GuardAdminGuard } from './views/guards/guard-admin.guard';
import { NotgarduserGuard } from './views/guards/notgarduser.guard';

const routes: Routes = [
  {path:'',component:FrontLayoutComponent,
  children:[
    {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'loginuser',loadChildren:()=>import('./views/front/loginuser/loginuser.module').then(m=>m.LoginuserModule),canActivateChild:[NotgarduserGuard]},
    {path:'register',loadChildren:()=>import('./views/front/register/register.module').then(m=>m.RegisterModule),canActivateChild:[NotgarduserGuard]},
    {path:'students',loadChildren:()=>import('./views/front/student/student.module').then(m=>m.StudentModule),canActivateChild:[GarduserGuard]},
    {path:'student/:id',loadChildren:()=>import('./views/front/detailsstudent/detailsstudent.module').then(m=>m.DetailsstudentModule),canActivateChild:[GarduserGuard]},
  ]},

  {path:'admin',component:AdminLayoutComponent,canActivate:[GuardAdminGuard],
  children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'allstudents',loadChildren:()=>import('./views/admin/allstudents/allstudents.module').then((m)=>m.AllstudentsModule)},
    {path:'studentdetails/:id',loadChildren:()=>import('./views/admin/details/details.module').then((m)=>m.DetailsModule)},
    {path:'addstudent',loadChildren:()=>import('./views/admin/addstudent/addstudent.module').then((m)=>m.AddstudentModule)},
   
  ]},
  {path:'admin/login',component:AuthAdminLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
