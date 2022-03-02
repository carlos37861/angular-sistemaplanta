import { Component, DefaultIterableDiffer, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DefaultModule } from './layouts/default/default.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [
  
  {
  path:'',
  component:DefaultComponent,
  children:[{
    path:'',
    component:DashboardComponent
  },{
  path:'posts',
  component: PostsComponent 
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  }
]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
