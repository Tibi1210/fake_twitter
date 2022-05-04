import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Input,
  OnInit,
} from '@angular/core';
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

  //1 INPUT
  @Input() user: any;

  edit: boolean = true;

  //user = JSON.parse(localStorage.getItem('userData') as string);

  ngOnInit(): void {
    let uname: any = document.getElementById('nev');
    let tag: any = document.getElementById('tag');
    let bio: any = document.getElementById('bio');

    if (this.user != null && uname != null && tag != null && bio != null) {
      uname.innerHTML = this.user.username;
      tag.innerHTML = this.user.userat;
      bio.innerHTML = this.user.bio;
    }
  }


  change() {
    this.edit = !this.edit; 
  }

}
