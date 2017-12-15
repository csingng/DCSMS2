import { Observable } from 'rxjs/Rx';
import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { AdminContractsService } from '../../../service/safetyAlert/admin-contracts.service';

@Component({
  selector: 'app-safety-alert-admin-contracts',
  templateUrl: './safety-alert-admin-contracts-edit.component.html',
  styleUrls: ['./safety-alert-admin-contracts-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AdminContractsService]
})
export class SafetyAlertAdminContractsEditComponent implements OnInit {

  public onSplitButtonItemClick(dataItem: any): void {
        this.router.navigate([dataItem.routerLink]);
  }
  //------------------------------------------------------------------
  public staffs: Array<string> = ["-- All --", "Active", "InActive"];
  public managers: Array<string> = ["Manager A", "Sarah-CM", "Ricky_CM"];
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

    private adminContractsService: AdminContractsService;
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

    constructor(private _adminContractsService: AdminContractsService, private router: Router) {
        console.log('[SafetyAlertAdminContractsComponent.constructor]');
        this.adminContractsService = _adminContractsService;

        this.data = this.source.slice();
    }
    public filterChange(filter: any): void {
        this.data = this.source.filter((s) => s.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }
    public ngOnInit(): void {
        console.log('[SafetyAlertAdminContractsComponent.ngOnInit]  this.adminContractsService=', this.adminContractsService);
        this.view = this.adminContractsService.map(data => process(data, this.gridState));

        this.adminContractsService.read();
    }

    public onStateChange(state: State) {
        console.log('[SafetyAlertAdminContractsComponent.onStateChange]  state=', state);
        this.gridState = state;
        this.adminContractsService.read();
    }

    protected addHandler({sender}) {
        this.closeEditor(sender);

        this.formGroup = new FormGroup({
            'ProductID': new FormControl(),
            'ProductName': new FormControl("", Validators.required),
            'UnitPrice': new FormControl(0),
            'UnitsInStock': new FormControl("", Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])),
            'Discontinued': new FormControl(false)
        });

        sender.addRow(this.formGroup);
    }

    protected editHandler({sender, rowIndex, dataItem}) {
        console.log('[SafetyAlertAdminContractsComponent.editHandler]  sender=', sender);
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        sender.editRow(rowIndex, this.formGroup);
    }

    protected cancelHandler({sender, rowIndex}) {
        console.log('[SafetyAlertAdminContractsComponent.cancelHandler]  sender=', sender);
        this.closeEditor(sender, rowIndex);
    }

    private closeEditor(grid, rowIndex = this.editedRowIndex) {
        console.log('[SafetyAlertAdminContractsComponent.closeEditor]');
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.formGroup = undefined;
    }

    protected saveHandler({sender, rowIndex, formGroup, isNew}) {
        console.log('[SafetyAlertAdminContractsComponent.saveHandler]');
        sender.closeRow(rowIndex);
    }

    protected removeHandler({dataItem}) {
        console.log('[SafetyAlertAdminContractsComponent.removeHandler]');
    }

    protected editContract() {
        console.log('[SafetyAlertAdminContractsComponent.createContract]');
    }
}
