import { Component, DefaultIterableDiffer, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DefaultModule } from './layouts/default/default.module';
import { LoginComponent } from './Login/login/login.component';
import { RepositorioComponent } from './modules/repositorio/repositorio.component';
import { PostsComponent } from './modules/posts/posts.component';
import { MetadatoComponent } from './modules/metadato/metadato.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:DefaultComponent,children:[{path:'home',component:RepositorioComponent},{path:'metadato',component: MetadatoComponent},
  {path:'**',redirectTo:'home',pathMatch:'full'},
  
 
]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
