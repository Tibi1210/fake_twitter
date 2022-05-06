import { Component, Input, OnInit } from '@angular/core';
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
  edittext: string = "Edit";

  //user = JSON.parse(localStorage.getItem('userData') as string);

  ngOnInit(): void {
    let uname: any = document.getElementById('nev');
    let tag: any = document.getElementById('tag');
    let bio: any = document.getElementById('bio');
    let editbio: any = document.getElementById('editbio');
    

    if (this.user != null && uname != null && tag != null && bio != null && editbio != null) {
      uname.innerHTML = this.user.username;
      tag.innerHTML = this.user.userat;
      bio.innerHTML = this.user.bio;
      editbio.placeholder=this.user.bio;
    }

  }

  change() {
    let editbio: any = document.getElementById('editbio');
    let bio: any = document.getElementById('bio');
    this.edit = !this.edit;
    if(editbio.value!=null&&editbio.value!=""){
      this.user.bio = editbio.value;
      bio.innerHTML = this.user.bio;
      localStorage.setItem('userData', JSON.stringify(this.user));
      this.userService.update(this.user);
      editbio.value="";
      editbio.placeholder=this.user.bio;
      this.edittext="Edited!";
    }
  }

}
