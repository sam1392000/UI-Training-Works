import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo-button/todo';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  todoList:Todo[]=[];
  total:number = 0;
  pending:number = 0;
  done:number = 0;
  constructor(private todoservice : TodoserviceService) { 
    //   todoservice.subjectMessage.subscribe(list => {
    //   this.todoList = Object.values(list);
    //   console.log(this.todoList)
    //   this.total = this.todoList.length;
    //   this.done = this.todoList.filter(data => data.status === true).length;
    //   this.pending = this.total - this.done;
    // })
  }

  ngOnInit(): void {
    this.todoservice.subjectMessage.subscribe(list => {
      console.log(list)
      this.todoList = Object.values(list);
      // console.log(this.todoList)
      this.total = this.todoList.length;
      this.done = this.todoList.filter(data => data.status === true).length;
      this.pending = this.total - this.done;
    })
  }

}
