import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopmenuComponent } from './shared/topmenu/topmenu.component';
import { TweetcardComponent } from './shared/tweetcard/tweetcard.component';
import { LeftmenuComponent } from './shared/leftmenu/leftmenu.component';
import { ToptitleComponent } from './shared/toptitle/toptitle.component';
import { TopsearchComponent } from './shared/topsearch/topsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    TweetcardComponent,
    LeftmenuComponent,
    ToptitleComponent,
    TopsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
