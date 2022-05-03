import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PostcardComponent } from './postcard.component';
import { TweetcardModule } from '../tweetcard/tweetcard.module';



@NgModule({
  declarations: [
    PostcardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TweetcardModule
  ],
  exports:[
    PostcardComponent
  ]
  
})
export class PostcardModule { }
