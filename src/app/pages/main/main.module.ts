import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { PostcardModule } from 'src/app/shared/postcard/postcard.module';
import { MainComponent } from './main.component';
import { TweetcardModule } from 'src/app/shared/tweetcard/tweetcard.module';
import { LeftmenuModule } from 'src/app/shared/leftmenu/leftmenu.module';
import { ToptitleModule } from 'src/app/shared/toptitle/toptitle.module';
import { TopsearchModule } from 'src/app/shared/topsearch/topsearch.module';
import { RightboxModule } from 'src/app/shared/rightbox/rightbox.module';
import { BottommenuModule } from 'src/app/shared/bottommenu/bottommenu.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DateFormatPipe } from 'src/app/pipes/date-format.pipe';
import { DateFormatModuleModule } from 'src/app/pipes/date-format-module/date-format-module.module';


@NgModule({
  declarations: [
    MainComponent,
    
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PostcardModule,
    TweetcardModule,
    LeftmenuModule,
    ToptitleModule,
    TopsearchModule,
    RightboxModule,
    BottommenuModule,
    FlexLayoutModule,
    DateFormatModuleModule
  ]
})
export class MainModule { }
