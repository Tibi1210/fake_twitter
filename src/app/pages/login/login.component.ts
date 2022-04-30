import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/UserLogin';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.createForm({
    email: '',
    passwd: '',
  });

  hide = true;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
  createForm(model: UserLogin) {
    let fg = this.fb.group(model);
    fg.get('email')?.addValidators([
      Validators.required,
      Validators.minLength(5),
      Validators.email,
    ]);
    fg.get('passwd')?.addValidators([
      Validators.required,
      Validators.minLength(10),
    ]);
    return fg;
  }
  login() {
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.get('email')?.value, this.loginForm.get('passwd')?.value)
        .then((cred) => {
          console.log(cred);
          this.router.navigateByUrl('/home');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('fail');
    }
  }
}
