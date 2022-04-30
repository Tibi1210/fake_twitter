import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/models/UserRegister';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  hide = true;
  registerForm = this.createForm({
    username: '',
    userat: '',
    email: '',
    passwd: '',
    passwd_comfirm: ''
  })

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
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
      this.authService
        .signUp(this.registerForm.get('email')?.value, this.registerForm.get('passwd')?.value)
        .then((cred) => {
          console.log(cred);
          if(cred.user){
          cred.user.updateProfile({
            displayName: this.registerForm.get('username')?.value,
            photoURL: "../../../assets/image/kep.jpg"
          });
        }
          this.router.navigateByUrl('/login');
        })
        .catch((error) => {
          console.log(error);
        });
    }else{
      console.log("fail")
    }
    
  }
}
