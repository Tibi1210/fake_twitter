import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostDB } from 'src/app/models/PostDB';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.scss'],
})
export class PostcardComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user') as string);
  userData = JSON.parse(localStorage.getItem('userData') as string);
  postForm = this.createForm({
    text: '',
  });

  constructor(private fb: FormBuilder, private postService: PostService) {}

  ngOnInit(): void {}

  createForm(model: Post) {
    let fg = this.fb.group(model);
    fg.get('text')?.addValidators([Validators.required]);
    return fg;
  }

  post() {
    if (this.postForm.valid) {
      const post: PostDB = {
        username: this.userData.username,
        text: this.postForm.get('text')?.value,
        id: Date.now().toString(),
      };

      this.postService
        .create(post)
        .then((_) => {
          console.log('post added');
        })
        .catch((error) => {
          console.error(error);
        });
      this.postForm.setValue({ text: '' });
    } else {
      console.log('fail');
    }
  }
}
