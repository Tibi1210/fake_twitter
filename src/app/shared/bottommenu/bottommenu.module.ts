import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottommenuComponent } from './bottommenu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BottommenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    BottommenuComponent
  ]

})
export class BottommenuModule { }
