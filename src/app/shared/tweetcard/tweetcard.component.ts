import { Component, Input, OnInit } from '@angular/core';
import { PostDB } from 'src/app/models/PostDB';

@Component({
  selector: 'app-tweetcard',
  templateUrl: './tweetcard.component.html',
  styleUrls: ['./tweetcard.component.scss']
})
export class TweetcardComponent implements OnInit {

  @Input() tomb: PostDB[] =[];

  constructor() { }
  

  ngOnInit(): void {
    let n: any = document.getElementById('name');
    let t: any = document.getElementById('text');

    
    
  }

}
