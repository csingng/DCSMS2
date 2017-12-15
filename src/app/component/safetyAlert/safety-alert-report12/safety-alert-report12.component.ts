import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety-alert-report12',
  templateUrl: './safety-alert-report12.component.html',
  styleUrls: ['./safety-alert-report12.component.scss']
})
export class SafetyAlertReport12Component implements OnInit {
  public topArray: Array<any> = ["item", "%"];
  public yearRange: Array<number>;
  public items: Array<string>;
  constructor() { }

  ngOnInit() {
    this.topArray = ["item", "%"];
    this.yearRange = Array.apply(null, Array(20)).map(function (_, i) {return 2017-i;});
    this.items = ["item", "item1", "item2"];
  }
}
