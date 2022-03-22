import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , FormBuilder , Validator, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import { PasswordValidator } from './passwordValidator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  // ----------------- Form Group ----------------------
  // registrationForm = new FormGroup({
  //   name: new FormControl(''),
  //   email : new FormControl(''),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl('')
  // })

  updateData(){

    // setValue follows the strict rule it can only replace all data in form if u want prefill only name and email , setValue wont all that it will sjow error. In order to overcome that flaw we can use patchValue

    // this.registrationForm.setValue({
    //   name:"Sam",
    //   email:"sam@sam.com",
    //   password:"12345",
    //   confirmPassword:"12345"
    // })

    // this.registrationForm.patchValue({
    //   name:"Sam",
    //   email:"sam@sam.com",
    //   password:"12345",
    //   confirmPassword:"12345"
    // })
  }

  // ================= FormBuilder Service ==============

  // getter to get instaance of name from the registrationForm

  
  passwordRegex:string="(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  registrationForm = this.fb.group({
    name:['',[Validators.required , Validators.minLength(2)]],
    email:['',[Validators.email,Validators.required]],
    password:['',[Validators.required , Validators.pattern(this.passwordRegex)]],
    confirmPassword:['']
  },{validator:PasswordValidator});
  get form(){
    return this.registrationForm.controls;
  }

  // CustomValidator 
 

}
