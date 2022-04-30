import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightboxComponent } from './rightbox.component';
import{MatExpansionModule} from '@angular/material/expansion'




@NgModule({
  declarations: [
    RightboxComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,

    
  ],
  exports: [
    RightboxComponent
  ]
})
export class RightboxModule { }
