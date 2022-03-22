import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Todo } from './todo-button/todo';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from 'src/response';
@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  list:Todo[]=[];
  private subjectSource = new Subject<any>();
  subjectMessage = this.subjectSource.asObservable();
 
  _URL = `https://angulartodo-b12c4-default-rtdb.firebaseio.com/todo`;



  constructor(private http:HttpClient) { }

  SaveTodo(newTodo:Todo){
    const headers = { 'content-type': 'application/json'}  
    // const body=JSON.stringify(newTodo);
        // this.list.push(newTodo);
        // console.log(typeof this.list)
        // this.subjectSource.next(this.list)
      this.http.post(`${this._URL}.json` , newTodo , {headers:headers,observe:'response'})
        .subscribe(
          res => {
          console.log("SuccessFully posted... " + JSON.stringify(res.body))
        },
        error => {
          console.log("Post failed with the errors");
        },
        () => {
          console.log("Post Completed");
        }
      )
      this.subjectSource.next(this.list)
  }

  //
  retrieveAllTodos():Todo[]{
    // console.log(typeof this.list)
    // this.subjectSource.next(this.list)
    // return this.list;

    let allTodo:Todo[]=[] 
    this.http.get<Todo[]>(`${this._URL}.json`)
    .pipe(
      map((response) => {
         let todos = [];
        console.log(response + " is the response")
        for(let key in response){
          todos.push({...response[key],key})
        }
        console.log(response)
        allTodo = todos
        return todos
      })
    )
    // .subscribe((res) => {
    //   allTodo = res
    //   console.log(res)
    // })
    return allTodo;
    
   this.subjectSource.next(this.list);
  // return this.list;
  }

  removeTodo(id:string){
    console.log(id);
    // console.log(this.list)
    // this.list = this.list.filter(todo => todo.id !== id)
    // this.subjectSource.next(this.list)
    // // this.subjectSource.next(this.list)
    // return this.list;
    this.http.delete(`${this._URL}/${id}.json`).subscribe((res) => {
      console.log("Remove function called")
      this.retrieveAllTodos()
    })
  }
  
  markAsDone(id:string){
    
    //  this.list.map(data => {
    //   if(data.id == id){
    //     data.status = true
    //     this.subjectSource.next(this.list)
    //   }
    // })
    // console.log(this.list)
    // this.subjectSource.next(this.list)
    
  }

}
