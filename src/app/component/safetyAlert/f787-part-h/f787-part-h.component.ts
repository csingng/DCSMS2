import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-f787-part-h',
  templateUrl: './f787-part-h.component.html',
  styleUrls: ['./f787-part-h.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class F787PartHComponent implements OnInit {
  public today: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
