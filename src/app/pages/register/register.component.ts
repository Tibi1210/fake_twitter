import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/models/UserRegister';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  registerForm = this.createForm({
    username: '',
    userat: '',
    email: '',
    passwd: '',
    passwd_comfirm: ''
  })

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {}

  createForm(model: UserRegister){
    return this.fb.group(model);
  }

  register() {
    console.log(this.registerForm.value)
    this.router.navigateByUrl('login');
  }
}
