import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopmenuComponent } from './shared/topmenu/topmenu.component';
import { TweetcardComponent } from './shared/tweetcard/tweetcard.component';
import { LeftmenuComponent } from './shared/leftmenu/leftmenu.component';
import { ToptitleComponent } from './shared/toptitle/toptitle.component';
import { TopsearchComponent } from './shared/topsearch/topsearch.component';
import { RightboxComponent } from './shared/rightbox/rightbox.component';
import { BottommenuComponent } from './shared/bottommenu/bottommenu.component';
import { MainComponent } from './pages/main/main.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfilecardComponent } from './shared/profilecard/profilecard.component';

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    TweetcardComponent,
    LeftmenuComponent,
    ToptitleComponent,
    TopsearchComponent,
    RightboxComponent,
    BottommenuComponent,
    MainComponent,
    RegisterComponent,
    ProfileComponent,
    ProfilecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
