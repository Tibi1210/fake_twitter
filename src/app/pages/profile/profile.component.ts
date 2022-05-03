import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostDB } from 'src/app/models/PostDB';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

export class ProfileComponent implements OnInit {
  constructor(private postService: PostService, private router: Router) {}

  asd: PostDB[] = [];
  i = 0;
  user = JSON.parse(localStorage.getItem('userData') as string);
  postSub:any;

  ngOnInit(): void {
    this.postSub= this.postService
      .getSomeones(this.user.username)
      .subscribe((data: Array<PostDB>) => {
        if (data) {
          data.forEach((element) => {
            this.asd[this.i] = element;
            this.i++;
          });
        }
      });
  }

  deleteTweet(d: string) {
    this.postService.delete(d);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/profile']);
    });
  }

}
