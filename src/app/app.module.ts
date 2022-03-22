import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoButtonComponent } from './todo-button/todo-button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoserviceService } from './todoservice.service';
import { TodocategoryComponent } from './todocategory/todocategory.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VowelCapsPipe } from './vowel-caps.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';

import {AngularFireModule} from '@angular/fire/compat'
import {AngularFireDatabaseModule} from '@angular/fire/compat/database'
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoButtonComponent,
    NavbarComponent,
    TodocategoryComponent,
    SigninComponent,
    SignupComponent,
    VowelCapsPipe,
    ChildcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [TodoserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
