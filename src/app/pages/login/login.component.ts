import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
        .login(
          this.loginForm.get('email')?.value,
          this.loginForm.get('passwd')?.value
        )
        .then((cred) => {
          this.router.navigateByUrl('/home');
        })
        .catch((error) => {
          console.log(error);
        });

      this.authService.isUserLoggedIn().subscribe(
        (user) => {
          this.loggedInUser = user;
          localStorage.setItem('user', JSON.stringify(this.loggedInUser));
        },
        (error) => {
          console.error(error);
          localStorage.setItem('user', JSON.parse('null'));
        }
      );

      this.userService.getAll().subscribe((data: Array<User>) => {
        data.forEach((element) => {
          if (element.id == this.loggedInUser?.uid) {
            localStorage.setItem('userData', JSON.stringify(element));
          }
        });
      });
    } else {
      console.log('fail');
    }
  }
}
