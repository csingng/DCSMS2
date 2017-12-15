import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-f787-part-a',
  templateUrl: './f787-part-a.component.html',
  styleUrls: ['./f787-part-a.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class F787PartAComponent implements OnInit {
  public value: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
