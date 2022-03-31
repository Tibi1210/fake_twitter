import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/UserLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.createForm({
    email: '',
    passwd: '',
  })

  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }
  createForm(model: UserLogin){
    return this.fb.group(model);
  }
  login(){
    console.log(this.loginForm.value)
    this.router.navigateByUrl('home');
  }

}
