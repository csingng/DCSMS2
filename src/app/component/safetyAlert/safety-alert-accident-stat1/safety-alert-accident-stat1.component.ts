import { Observable } from 'rxjs/Rx';
import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { accidentStat1 } from '../../../sampleData/accidentStat1';

@Component({
  selector: 'app-safety-alert-accident-stat1',
  templateUrl: './safety-alert-accident-stat1.component.html',
  styleUrls: ['./safety-alert-accident-stat1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SafetyAlertAccidentStat1Component implements OnInit {
  private gridData: any[] = accidentStat1;

  constructor() { }

  ngOnInit() {
  }

}
