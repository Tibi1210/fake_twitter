import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetcardComponent } from './tweetcard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TweetcardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    TweetcardComponent
  ]
})
export class TweetcardModule { }
