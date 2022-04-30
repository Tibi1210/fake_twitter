import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightbox',
  templateUrl: './rightbox.component.html',
  styleUrls: ['./rightbox.component.scss']
})
export class RightboxComponent implements OnInit {

  constructor() { }
  panelOpenState = false;
  ngOnInit(): void {
  }

}
