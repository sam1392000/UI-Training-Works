import { Component, OnInit } from '@angular/core';
import { Signin } from './signin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signIn = new Signin('','');
  constructor() { }

  ngOnInit(): void {
  }

  

}
