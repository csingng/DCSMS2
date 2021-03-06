import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety-alert-report3',
  templateUrl: './safety-alert-report3.component.html',
  styleUrls: ['./safety-alert-report3.component.scss']
})
export class SafetyAlertReport3Component implements OnInit {

  public yearRange: Array<number>;
  public items: Array<string>;
  constructor() { }

  ngOnInit() {
    this.yearRange = Array.apply(null, Array(20)).map(function (_, i) {return 1997+i;});
    this.items = ["item", "item1", "item2"];
  }
}
