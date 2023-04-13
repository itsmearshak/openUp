import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './screens/main-page/main-page.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:"full"},
  {path:'login',component:LoginComponent ,},
  {path:'home',component:MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
