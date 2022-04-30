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

  loggedInUser?: firebase.default.User | null;

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(
      (user) => {
        this.loggedInUser = user;
        let uname: any = document.getElementById('nev');
        let tag: any = document.getElementById('tag');
        let bio: any = document.getElementById('bio');
        let pfp: any = document.getElementById('profilepicture');

        if (
          this.loggedInUser != null &&
          uname != null &&
          tag != null &&
          bio != null &&
          pfp != null
        ) {
          uname.innerHTML = this.loggedInUser.displayName;
          tag.innerHTML = this.loggedInUser?.email;
          bio.innerHTML = this.loggedInUser?.photoURL;
          pfp.src = this.loggedInUser?.photoURL;
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
