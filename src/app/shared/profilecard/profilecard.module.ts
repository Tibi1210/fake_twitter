import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilecardComponent } from './profilecard.component';



@NgModule({
  declarations: [
    ProfilecardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProfilecardComponent
  ]
})
export class ProfilecardModule { }
