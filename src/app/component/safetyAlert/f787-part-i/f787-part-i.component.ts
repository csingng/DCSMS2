import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-f787-part-i',
  templateUrl: './f787-part-i.component.html',
  styleUrls: ['./f787-part-i.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class F787PartIComponent implements OnInit {
  public today: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
