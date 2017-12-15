import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-f787-part-l',
  templateUrl: './f787-part-l.component.html',
  styleUrls: ['./f787-part-l.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class F787PartLComponent implements OnInit {
  public today: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
