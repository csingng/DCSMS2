import { Observable } from 'rxjs/Rx';
import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { SiteService } from '../../../service/safetyAlert/site.service';


@Component({
  selector: 'app-safety-alert-site',
  templateUrl: './safety-alert-site.component.html',
  styleUrls: ['./safety-alert-site.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [SiteService]
})
export class SafetyAlertSiteComponent implements OnInit {
  public navigate(_routerLink): void {
    console.log('[SafetyAlertSiteComponent]   _routerLink', _routerLink);
    this.router.navigate([_routerLink]);
  }

  public source: Array<string> = ["-- All --", "Active", "InActive"];
  public data: Array<string>;

  public view: Observable<GridDataResult>;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };
  public formGroup: FormGroup;

  private siteService: SiteService;
  private editedRowIndex: number;

  constructor(private _siteService: SiteService, private router: Router) {
    console.log('[SafetyAlertSiteComponent.constructor]');
    this.siteService = _siteService;

    this.data = this.source.slice();
   }

  // constructor() {

  // }

  public ngOnInit() {

    console.log('[SafetyAlertSiteComponent.ngOnInit]  this.siteService=', this.siteService);
    this.view = this.siteService.map(data => process(data, this.gridState));

    this.siteService.read();
  }

  public onStateChange(state: State) {
    console.log('[SafetyAlertSiteComponent.onStateChange]  state=', state);
    this.gridState = state;
    this.siteService.read();
  }

  protected addHandler({ sender }) {
    console.log('[SafetyAlertSiteComponent.addHandler]  sender=', sender);
    this.closeEditor(sender);
  }

  protected editHandler({ sender, rowIndex, dataItem }) {
    console.log('[SafetyAlertSiteComponent.editHandler]  sender=', sender);
    this.closeEditor(sender);
    this.editedRowIndex = rowIndex;
    sender.editRow(rowIndex, this.formGroup);
  }

  protected cancelHandler({ sender, rowIndex }) {
    console.log('[SafetyAlertSiteComponent.cancelHandler]  sender=', sender);
    this.closeEditor(sender, rowIndex);
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    console.log('[SafetyAlertSiteComponent.closeEditor]');
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }

  protected saveHandler({ sender, rowIndex, formGroup, isNew }) {
    console.log('[SafetyAlertSiteComponent.saveHandler]');
    sender.closeRow(rowIndex);
  }

  protected removeHandler({ dataItem }) {
    console.log('[SafetyAlertSiteComponent.removeHandler]');
  }

}
