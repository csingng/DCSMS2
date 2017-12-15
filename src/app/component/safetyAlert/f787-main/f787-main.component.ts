import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-f787-main',
  templateUrl: './f787-main.component.html',
  styleUrls: ['./f787-main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class F787MainComponent implements OnInit {
  public value: Date = new Date();

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
  }

}
