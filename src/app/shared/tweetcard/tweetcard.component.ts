import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweetcard',
  templateUrl: './tweetcard.component.html',
  styleUrls: ['./tweetcard.component.scss']
})
export class TweetcardComponent implements OnInit {

  @Input() nev ='';
  @Input() text ='';
  @Input() date ='';

  constructor() { }
  

  ngOnInit(): void {
    let n: any = document.getElementById('name');
    let t: any = document.getElementById('text');

    if (
      n != null &&
      t != null
    ) {
      n.innerHTML = this.nev;
      t.innerHTML = this.text;

    }
    
  }

}
