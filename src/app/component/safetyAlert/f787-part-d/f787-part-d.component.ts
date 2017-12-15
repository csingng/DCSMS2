import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-f787-part-d',
  templateUrl: './f787-part-d.component.html',
  styleUrls: ['./f787-part-d.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class F787PartDComponent implements OnInit {
  public today: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
