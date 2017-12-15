import { Observable } from 'rxjs/Rx';
import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { accidentStat2 } from '../../../sampleData/accidentStat2';

@Component({
  selector: 'app-safety-alert-accident-stat2',
  templateUrl: './safety-alert-accident-stat2.component.html',
  styleUrls: ['./safety-alert-accident-stat2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SafetyAlertAccidentStat2Component implements OnInit {
  private gridData: any[] = accidentStat2;

  constructor() { }

  ngOnInit() {
  }

}
