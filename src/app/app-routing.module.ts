import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TodoButtonComponent } from './todo-button/todo-button.component';
import { TodoComponent } from './todo/todo.component';
import { TodocategoryComponent } from './todocategory/todocategory.component';

const routes: Routes = [
  { path:'',redirectTo:"alltodo",pathMatch:'full'},
  { path:'signin',component:SigninComponent},
  { path:'signup',component:SignupComponent},
  { 
    path:"alltodo",component:TodoComponent, 
  children:[
    { path:'childroute',component: ChildcomponentComponent}
  ]
},
// { path:'alltodo/childroute',component: ChildcomponentComponent},
  { path:"addtodo", component:TodoButtonComponent},
  { path:"todo/:category",component:TodocategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
