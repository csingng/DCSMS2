import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety-alert-report18',
  templateUrl: './safety-alert-report18.component.html',
  styleUrls: ['./safety-alert-report18.component.scss']
})
export class SafetyAlertReport18Component implements OnInit {
  public yearRange: Array<number>;
  public items: Array<string>;
  constructor() { }

  ngOnInit() {
    this.topArray = ["item", "%"];
    this.yearRange = Array.apply(null, Array(20)).map(function (_, i) {return 2017-i;});
    this.items = ["item", "item1", "item2"];
  }

}
