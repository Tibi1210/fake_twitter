import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profilecard',
  templateUrl: './profilecard.component.html',
  styleUrls: ['./profilecard.component.scss'],
})
export class ProfilecardComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string);

    let uname: any = document.getElementById('nev');
    let tag: any = document.getElementById('tag');
    let bio: any = document.getElementById('bio');
    let pfp: any = document.getElementById('profilepicture');

    if (
      user != null &&
      uname != null &&
      tag != null &&
      bio != null &&
      pfp != null
    ) {
      uname.innerHTML = user.displayName;
      tag.innerHTML = user.email;
      bio.innerHTML = user.photoURL;
      pfp.src = user.photoURL;
    }
  }
}
