import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoserviceService } from '../todoservice.service';

import { Todo } from './todo';

@Component({
  selector: 'app-todo-button',
  templateUrl: './todo-button.component.html',
  styleUrls: ['./todo-button.component.css']
})
export class TodoButtonComponent implements OnInit {

  title:string="";
  description:string="";
  category:string="";
  date:Number=Date.now();

  constructor(private todoService:TodoserviceService , private router:Router) { }

  ngOnInit(): void {
  }

  addTask(){
    const newTodo:Todo={
      title:this.title,
      description:this.description,
      category:this.category,
      date:this.date,
      status:false
    };
    this.todoService.SaveTodo(newTodo)
    this.title='';
    this.onChange("");
    this.date=0;
    this.description=""
    
  }

    onChange(categoryValue:string){
      this.category = categoryValue;
    }
}
