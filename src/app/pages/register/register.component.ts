import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm=new FormGroup({
    username: new FormControl(''),
    userat: new FormControl(''),
    email: new FormControl(''),
    passwd: new FormControl(''),
    passwd_comfirm: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.registerForm.value)
  }

}
