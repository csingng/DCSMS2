import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AdminContractsModel } from '../../model/safetyAlert/admin-contracts.model';

import _ from 'lodash';

const CREATE_ACTION = 'create';
const UPDATE_ACTION = 'update';
const REMOVE_ACTION = 'destroy';
const contractsSummaries = [
    { contractNumber: '20151106', contractTitle: 'XYZ building construction', commencementDate: '2015-11-06', completionDate: '2015-11-07', certifiedCompletionDate: '2015-11-07', cutOffDate: '2015-11-14', contractManager: 'Ricky_CM', status: 'Active ', submissionDate: '2015-11-06 11:52:34'},
    { contractNumber: '12341234', contractTitle: 'Sarah-Construction of Home Ownership Scheme at XXX Road Phases XXX and XXX, Demolition and Minor Works at XXX Estate Redevelopment Phases XXX and XXX and Alteration & Addition Works at XXX Estate', commencementDate: '2015-11-02', completionDate: '2016-11-16', certifiedCompletionDate: '2016-11-16', cutOffDate: '2016-11-17', contractManager: 'Sarah-CM', status: 'Active', submissionDate: '2015-11-06 11:52:34'},
    { contractNumber: '12345678', contractTitle: 'Sarah Construction of Public Rental Housing', commencementDate: '2015-11-03', completionDate: '2016-11-17', certifiedCompletionDate: '2016-11-17', cutOffDate: '2016-11-17', contractManager: 'Sarah-CM', status: 'Active', submissionDate: '2015-11-06 10:27:52'}
    //{ contractNumber: '2017-12-31', contractTitle: 'HA_Contract Sample', commencementDate: '2018-01-31', completionDate: '2019-02-28', certifiedCompletionDate: '2019-02-15', cutOffDate: '2019-03-05', contractManager: 'CA/2', status: 'Waiting for HD Contract Manager Review', submissionDate: '2017-12-10'},
  ];

@Injectable()
export class AdminContractsService extends BehaviorSubject<AdminContractsModel[]> {
    constructor(private http: HttpClient) {
        super([]);
    }

    private data: AdminContractsModel[] = contractsSummaries;

    public read() {
      var _that = this;
      console.log('[AdminContractsService.read]  STARTED');
        if (this.data.length) {
            return super.next(this.data);
        }
        /*
        _.each(contracts, function(row) {
            _that.data.push(row);
        });
        return super.next(this.data);

        this.fetch()
            .do(data => {
                this.data = data;
            })
            .subscribe(data => {
                super.next(data);
            });
        */
    }

    public save(data: any, isNew?: boolean) {
      console.log('[AdminContractsService.save]  STARTED');
        const action = isNew ? CREATE_ACTION : UPDATE_ACTION;

        this.reset();
        /*
        this.fetch(action, data)
            .subscribe(() => this.read(), () => this.read());
        */
    }

    public remove(data: any) {
      console.log('[AdminContractsService.remove]  STARTED');
        this.reset();
        /*
        this.fetch(REMOVE_ACTION, data)
            .subscribe(() => this.read(), () => this.read());
        */
    }

    public resetItem(dataItem: any) {
      console.log('[AdminContractsService.resetItem]  STARTED');
        if (!dataItem) { return; }

        //find orignal data item
        const originalDataItem = this.data.find(item => item.contractNumber === dataItem.contractNumber);

        //revert changes
        Object.assign(originalDataItem, dataItem);

        super.next(this.data);
    }

    private reset() {
        console.log('[AdminContractsService.reset]  STARTED');
        this.data = [];
    }

    private fetch(action: string = "", data?: any): Observable<AdminContractsModel[]>  {
        console.log('[AdminContractsService.fetch]  STARTED');

        return this.http
          .jsonp(`https://demos.telerik.com/kendo-ui/service/Contracts/${action}?${this.serializeModels(data)}`, 'callback')
          .map(res => <AdminContractsModel[]>res);

    }

    private serializeModels(data?: any): string {
       return data ? `&models=${JSON.stringify([data])}` : '';
    }
}
