import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

signUpForm =new FormGroup({
  email: new FormControl(''),
  passwd: new FormControl('')
})

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.signUpForm.value)

  }

}
