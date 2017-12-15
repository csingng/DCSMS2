import { Observable } from 'rxjs/Rx';
import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';


@Component({
  selector: 'app-safety-alert-accident-rate2',
  templateUrl: './safety-alert-accident-rate2.component.html',
  styleUrls: ['./safety-alert-accident-rate2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SafetyAlertAccidentRate2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
