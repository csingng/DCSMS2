import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety-alert-report2',
  templateUrl: './safety-alert-report2.component.html',
  styleUrls: ['./safety-alert-report2.component.scss']
})
export class SafetyAlertReport2Component implements OnInit {
  public yearRange: Array<number>;
  public items: Array<string>;
  constructor() { }

  ngOnInit() {
    this.yearRange = Array.apply(null, Array(20)).map(function (_, i) {return 2017-i;});
    this.items = ["item", "item1", "item2"];
  }
}
