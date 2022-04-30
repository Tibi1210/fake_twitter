import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profilecard',
  templateUrl: './profilecard.component.html',
  styleUrls: ['./profilecard.component.scss'],
})
export class ProfilecardComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('userData') as string);

    let uname: any = document.getElementById('nev');
    let tag: any = document.getElementById('tag');
    let bio: any = document.getElementById('bio');

    if (
      user != null &&
      uname != null &&
      tag != null &&
      bio != null
    ) {
      uname.innerHTML = user.username;
      tag.innerHTML = user.userat;
      bio.innerHTML = user.bio;
    }
  }
}
