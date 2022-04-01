import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToptitleComponent } from './toptitle.component';



@NgModule({
  declarations: [
    ToptitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ToptitleComponent
  ]
})
export class ToptitleModule { }
