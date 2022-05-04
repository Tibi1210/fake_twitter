import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottommenuComponent } from './bottommenu.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    BottommenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports:[
    BottommenuComponent
  ]

})
export class BottommenuModule { }
