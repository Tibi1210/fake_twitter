import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-bottommenu',
  templateUrl: './bottommenu.component.html',
  styleUrls: ['./bottommenu.component.scss']
})
export class BottommenuComponent implements OnInit {

  constructor(private authService:AuthService) { }

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
