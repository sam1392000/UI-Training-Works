import { Component, OnInit } from '@angular/core';
import {todo} from "./todo"
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

// export interface todo {
//   todo:String;
//   status:String;
// }

export class TodoComponent implements OnInit {
  
    title = "Todo App"
    todoValue:String="";
    list:todo[]=[];

  constructor() { }

  ngOnInit(): void {
      this.todoValue="";
      this.list=[];
  }

  addTodo(){
    if(this.todoValue !=""){
      const newTodo:todo = {
        id:Date.now(), 
        todo:this.todoValue,
        status:false
      };
      this.list.push(newTodo);
    }
    this.todoValue="";
  }

  deleteTodo(id:Number){
    this.list = this.list.filter(todo => todo.id !== id)
  }

  makeAsDone(id : Number){
    this.list.map(data => {
      if(data.id === id){
        data.status = true
      }
    })
  }

}
