import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.scss']
})
export class PostcardComponent implements OnInit {

  postForm = this.createForm({
    text: '',
  })

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
  }

  createForm(model: Post){
    let fg =this.fb.group(model);
    fg.get('text')?.addValidators([Validators.required]);
    return fg;
  }
  post(){
    if(this.postForm.valid){
      console.log(this.postForm.value)
    }else{
      console.log("fail")
    }
  }
}
