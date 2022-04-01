import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftmenuComponent } from './leftmenu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LeftmenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LeftmenuComponent
  ]
})
export class LeftmenuModule { }
