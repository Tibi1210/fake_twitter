import { Component, OnDestroy, OnInit } from '@angular/core';

import { PostDB } from 'src/app/models/PostDB';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private postService: PostService
  ) {}

  asd: PostDB[] = [];
  i = 0;
  condition = true;
  postSub:any;

  ngOnInit(): void {
    
    this.postSub=this.postService.getAll().subscribe((data: Array<PostDB>) => {
      if (data) {
        data.forEach((element) => {
          this.asd[this.i] = element;
          this.i++;
        });
      }
    });
  }

}
