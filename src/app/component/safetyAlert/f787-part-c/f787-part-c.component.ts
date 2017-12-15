import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-f787-part-c',
  templateUrl: './f787-part-c.component.html',
  styleUrls: ['./f787-part-c.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class F787PartCComponent implements OnInit {
  public today: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
