import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-f787-part-g',
  templateUrl: './f787-part-g.component.html',
  styleUrls: ['./f787-part-g.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class F787PartGComponent implements OnInit {
  public today: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
