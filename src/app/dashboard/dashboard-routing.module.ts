import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { 
    path: '', component: DashboardComponent, children :[
  {
    path: 'categories',component: CategoryComponent
  },
  {
    path: 'profile',component: ProfileComponent
  }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
