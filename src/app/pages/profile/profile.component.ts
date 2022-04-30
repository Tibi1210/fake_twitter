import { Component, OnInit } from '@angular/core';
import { PostDB } from 'src/app/models/PostDB';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private postService: PostService) {}

  asd: PostDB[] = [];
  i = 0;
  user = JSON.parse(localStorage.getItem('userData') as string);

  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Array<PostDB>) => {
      if (data) {
        data.forEach((element) => {
          if (this.user.username == element.username) {
            this.asd[this.i] = element;
            this.i++;
          }
        });
      }
    });
  }
}
