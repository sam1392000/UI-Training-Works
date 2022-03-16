import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  @Input() item:String ="";
  constructor() { }

  ngOnInit(): void {
  }

  
}
