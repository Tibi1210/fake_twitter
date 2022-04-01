import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PostcardComponent } from './postcard.component';



@NgModule({
  declarations: [
    PostcardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    PostcardComponent
  ]
  
})
export class PostcardModule { }
