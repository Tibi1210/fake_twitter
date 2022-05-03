import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.scss']
})
export class LeftmenuComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.isUserLoggedIn().subscribe(
      (user) => {
        if(user){
          this.authService.logout();
          localStorage.setItem('user', JSON.parse('null'));
          localStorage.setItem('userData', JSON.parse('null'));
        }
      },
      (error) => {
        console.error(error);
        localStorage.setItem('user', JSON.parse('null'));
        localStorage.setItem('userData', JSON.parse('null'));
      }
    );    
  }
}
