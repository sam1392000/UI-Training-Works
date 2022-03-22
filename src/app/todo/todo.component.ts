import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Todo } from '../todo-button/todo';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  list:any[]=[];
  _URL = `https://angulartodo-b12c4-default-rtdb.firebaseio.com/todo`;
  constructor(private todoService : TodoserviceService , private router:Router , private route : ActivatedRoute , private http:HttpClient) {
    console.log("function called : " +this.list)
   }
  name:string = 'aeroplane'
  ngOnInit(): void {
      // this.list=this.todoService.retrieveAllTodos()
      // console.log("Request received....")
      // console.log(this.list)
      this.getAllTodo()
    
  }

  getAllTodo(){
    this.list=[];
    this.http.get<Todo[]>(`${this._URL}.json`)
    .pipe(
      map((response) => {
         let todos = [];
        console.log(response + " is the response")
          for(let key in response){
            todos.push({...response[key],key})
          }
        this.list = todos;
        return todos;
      })
      
    )
    .subscribe(res => {
      console.log(res)
      this.list = res;
    })
  }

  markAsDone(id:number){
    console.log(id)
    this.list[id].status = true;
    let key_id = this.list[id].key;
    console.log(key_id)
    delete this.list[id].key;
    console.log(this.list[id])
    this.http.put(`${this._URL}/${key_id}.json`,this.list[id]).subscribe(res => {
      console.log(res)
      this.getAllTodo()
    })
  }
  deleteTodo(id:string){
    this.http.delete(`${this._URL}/${id}.json`).subscribe((res) => {
      console.log("Remove function called")
      this.getAllTodo()
    })
  }

  onSelect(category:string){
    this.router.navigate(['/todo',category])
  }

  childRouteDemo(){
    this.router.navigate(['/childroute'],{relativeTo:this.route})
  }
}
