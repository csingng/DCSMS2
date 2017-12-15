import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-f787-part-f',
  templateUrl: './f787-part-f.component.html',
  styleUrls: ['./f787-part-f.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class F787PartFComponent implements OnInit {
  public today: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
