import { Observable } from 'rxjs/Rx';
import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { SafetyAlertF787IndexService } from '../../../service/safetyAlert/safety-alert-f787-index.service';

@Component({
  selector: 'app-safety-alert-f787-index',
  templateUrl: './safety-alert-f787-index.component.html',
  styleUrls: ['./safety-alert-f787-index.component.scss']
})
export class SafetyAlertF787IndexComponent implements OnInit {

    public navigate(_routerLink): void {
        console.log('[SafetyAlertF787IndexComponent]   _routerLink', _routerLink);
        this.router.navigate([_routerLink]);
    }

  dropDownButtonItems: Array<any> = [
    {text: 'Edit / View', routerLink: '/f787Main'},
    {text: 'PDF', routerLink: '/f787Main'},
    {text: 'Form 2', routerLink: '/f787Main'},
    {text: 'Delete', routerLink: '/f787Main'},
  ];

  public onSplitButtonItemClick(dataItem: any): void {
        this.router.navigate([dataItem.routerLink]);
  }
  //------------------------------------------------------------------
  public source: Array<string> = ["-- All --", "Active", "InActive"];
  public data: Array<string>;

    public value: Date = new Date();

    public view: Observable<GridDataResult>;
    public gridState: State = {
        sort: [],
        skip: 0,
        take: 10
    };
    public formGroup: FormGroup;

    private adminF787Service: SafetyAlertF787IndexService;
    private editedRowIndex: number;

    // Do not initially show the Dialog
    public searchOpened: boolean = false;
    public closeSearch() {
      this.searchOpened = false;
    }
    public openSearch() {
      this.searchOpened = true;
    }
    public exportOpened: boolean = false;
    public closeExport() {
      this.exportOpened = false;
    }
    public openExport() {
      this.exportOpened = true;
    }

    constructor(private _adminF787Service: SafetyAlertF787IndexService, private router: Router) {
        console.log('[SafetyAlertF787IndexComponent.constructor]');
        this.adminF787Service = _adminF787Service;

        this.data = this.source.slice();
    }
    public filterChange(filter: any): void {
        this.data = this.source.filter((s) => s.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }
    public ngOnInit(): void {
        console.log('[SafetyAlertF787IndexComponent.ngOnInit]  this.adminF787Service=', this.adminF787Service);
        this.view = this.adminF787Service.map(data => process(data, this.gridState));

        this.adminF787Service.read();
    }

    public onStateChange(state: State) {
        console.log('[SafetyAlertF787IndexComponent.onStateChange]  state=', state);
        this.gridState = state;
        this.adminF787Service.read();
    }

    protected addHandler({sender}) {
        console.log('[SafetyAlertF787IndexComponent.addHandler]  sender=', sender);
        this.closeEditor(sender);
    }

    protected editHandler({sender, rowIndex, dataItem}) {
        console.log('[SafetyAlertF787IndexComponent.editHandler]  sender=', sender);
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        sender.editRow(rowIndex, this.formGroup);
    }

    protected cancelHandler({sender, rowIndex}) {
        console.log('[SafetyAlertF787IndexComponent.cancelHandler]  sender=', sender);
        this.closeEditor(sender, rowIndex);
    }

    private closeEditor(grid, rowIndex = this.editedRowIndex) {
        console.log('[SafetyAlertF787IndexComponent.closeEditor]');
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.formGroup = undefined;
    }

    protected saveHandler({sender, rowIndex, formGroup, isNew}) {
        console.log('[SafetyAlertF787IndexComponent.saveHandler]');
        sender.closeRow(rowIndex);
    }

    protected removeHandler({dataItem}) {
        console.log('[SafetyAlertF787IndexComponent.removeHandler]');
    }

}
