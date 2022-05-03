import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserLogin } from 'src/app/models/UserLogin';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

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

  loggedInUser?: firebase.default.User | null;

  hide = true;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  authSub:any;

  createForm(model: UserLogin) {
    let fg = this.fb.group(model);
    fg.get('email')?.addValidators([Validators.required, Validators.email]);
    fg.get('passwd')?.addValidators([
      Validators.required,
      Validators.minLength(10),
    ]);
    return fg;
  }
  login() {
    if (this.loginForm.valid) {
      this.authService
        .login(
          this.loginForm.get('email')?.value,
          this.loginForm.get('passwd')?.value
        )
        .then((cred) => {
          if (cred) {
            this.router.navigateByUrl('/home');
          }
        })
        .catch((error) => {
          console.log(error);
        });

      this.authSub=this.authService.isUserLoggedIn().subscribe(
        (user) => {
          this.loggedInUser = user;
          localStorage.setItem('user', JSON.stringify(this.loggedInUser));
          if (this.loggedInUser) {
            this.userService
              .getOne(this.loggedInUser?.uid as string)
              .subscribe((data: Array<User>) => {
                localStorage.setItem('userData', JSON.stringify(data[0]));
              });
          }
        },
        (error) => {
          console.error(error);
          localStorage.setItem('user', JSON.parse('null'));
        }
      );
    } else {
      console.log('fail');
    }
  }

}
