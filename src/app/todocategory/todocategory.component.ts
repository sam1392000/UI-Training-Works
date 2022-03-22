import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../todo-button/todo';
import { TodoserviceService } from '../todoservice.service';
@Component({
  selector: 'app-todocategory',
  templateUrl: './todocategory.component.html',
  styleUrls: ['./todocategory.component.css']
})
export class TodocategoryComponent implements OnInit {

  category:string="";
  todoList:Todo[]=[];
  constructor(private route:ActivatedRoute ,
    private todoService:TodoserviceService) { }

  ngOnInit(): void {
    let cate = this.route.snapshot.paramMap.get('category');
    this.category = String(cate);
    this.todoList = this.fetchCategoryData();
    console.log(this.todoList)
  }

  fetchCategoryData(){
    
    this.todoList =  this.todoService.list.filter(list => 
        list.category === this.category)
      return this.todoList
  }

  markAsDone(id:string){
    // this.todoService.markAsDone(id);
}
deleteTodo(id:string){
   this.todoService.removeTodo(id);
}

}
