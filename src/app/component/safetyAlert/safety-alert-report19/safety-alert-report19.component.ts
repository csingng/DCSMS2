import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety-alert-report19',
  templateUrl: './safety-alert-report19.component.html',
  styleUrls: ['./safety-alert-report19.component.scss']
})
export class SafetyAlertReport19Component implements OnInit {
  private gridData: any[] = [
    { col1: 'P-value < 0.01', col2: 'Reject H0', col3: 'Highly significant'},
    { col1: '0.01 < P-value < 0.05', col2: 'Reject H0', col3: 'Significant'},
    { col1: '0.05 <P-value < 0.10', col2: 'Consider the consequences of the type I error before rejecting H0', col3: 'Significant'},
    { col1: '0.10 < P-value', col2: 'Do not reject H0', col3: 'Not significant'},
  ];

  public yearRange: Array<number>;
  public items: Array<string>;
  constructor() { }

  ngOnInit() {
    this.yearRange = Array.apply(null, Array(20)).map(function (_, i) {return 2017-i;});
    this.items = ["item", "item1", "item2"];
  }
}
