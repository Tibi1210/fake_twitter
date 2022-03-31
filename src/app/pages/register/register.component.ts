import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    let fg =this.fb.group(model);
    fg.get('username')?.addValidators([Validators.required, Validators.minLength(5)]);
    fg.get('userat')?.addValidators([Validators.required, Validators.minLength(5)]);
    fg.get('email')?.addValidators([Validators.required]);
    fg.get('passwd')?.addValidators([Validators.required, Validators.minLength(10)]);
    fg.get('passwd_comfirm')?.addValidators([Validators.required, Validators.minLength(10)]);
    
    return fg;
  }

  register() {
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      this.router.navigateByUrl('login');
    }else{
      console.log("fail")
    }
    
  }
}
