import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ToptitleModule } from 'src/app/shared/toptitle/toptitle.module';
import { LeftmenuModule } from 'src/app/shared/leftmenu/leftmenu.module';
import { ProfileComponent } from './profile.component';
import { ProfilecardModule } from 'src/app/shared/profilecard/profilecard.module';
import { TweetcardModule } from 'src/app/shared/tweetcard/tweetcard.module';
import { TopsearchModule } from 'src/app/shared/topsearch/topsearch.module';
import { RightboxModule } from 'src/app/shared/rightbox/rightbox.module';
import { BottommenuModule } from 'src/app/shared/bottommenu/bottommenu.module';
import { PostcardModule } from 'src/app/shared/postcard/postcard.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ToptitleModule,
    LeftmenuModule,
    ProfilecardModule,
    TweetcardModule,
    TopsearchModule,
    RightboxModule,
    BottommenuModule,
    PostcardModule,
    FlexLayoutModule
  ]
})
export class ProfileModule { }
