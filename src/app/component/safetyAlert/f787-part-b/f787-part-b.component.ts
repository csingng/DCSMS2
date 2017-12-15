import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-f787-part-b',
  templateUrl: './f787-part-b.component.html',
  styleUrls: ['./f787-part-b.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class F787PartBComponent implements OnInit {
  public today: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
