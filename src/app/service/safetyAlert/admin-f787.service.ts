import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AdminF787Model } from '../../model/safetyAlert/admin-f787.model';

import _ from 'lodash';

const CREATE_ACTION = 'create';
const UPDATE_ACTION = 'update';
const REMOVE_ACTION = 'destroy';
const f787Summaries = [
  { caseNumber: '2017-00871', contractNumber: '20170101', contractTitle: 'HA_Contract Sample', contractor: 'Able Engineering Company Limited 20140742', siteStaff: 'COW/DC17', contractManager: 'CA/2', status: 'Waiting for HD Contract Manager Review', submissionDate: '-', accidentIncidentDate: '2017-10-18', sisNumber: '' },
  { caseNumber: '2017-00872', contractNumber: '20170102', contractTitle: 'HA_Contract Sample 2', contractor: 'Mable Engineering Company Limited 20140743', siteStaff: 'COW/DC18', contractManager: 'CA/3', status: 'Waiting for HD Contract Manager Review', submissionDate: '-', accidentIncidentDate: '2017-10-19', sisNumber: '' },
  ];

@Injectable()
export class AdminF787Service extends BehaviorSubject<AdminF787Model[]> {
    constructor(private http: HttpClient) {
        super([]);
    }

    private data: AdminF787Model[] = f787Summaries;

    public read() {
      var _that = this;
      console.log('[AdminF787Service.read]  STARTED');
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
      console.log('[AdminF787Service.save]  STARTED');
        const action = isNew ? CREATE_ACTION : UPDATE_ACTION;

        this.reset();
        /*
        this.fetch(action, data)
            .subscribe(() => this.read(), () => this.read());
        */
    }

    public remove(data: any) {
      console.log('[AdminF787Service.remove]  STARTED');
        this.reset();
        /*
        this.fetch(REMOVE_ACTION, data)
            .subscribe(() => this.read(), () => this.read());
        */
    }

    public resetItem(dataItem: any) {
      console.log('[AdminF787Service.resetItem]  STARTED');
        if (!dataItem) { return; }

        //find orignal data item
        const originalDataItem = this.data.find(item => item.contractNumber === dataItem.contractNumber);

        //revert changes
        Object.assign(originalDataItem, dataItem);

        super.next(this.data);
    }

    private reset() {
        console.log('[AdminF787Service.reset]  STARTED');
        this.data = [];
    }

    private fetch(action: string = "", data?: any): Observable<AdminF787Model[]>  {
        console.log('[AdminF787Service.fetch]  STARTED');

        return this.http
          .jsonp(`https://demos.telerik.com/kendo-ui/service/Contracts/${action}?${this.serializeModels(data)}`, 'callback')
          .map(res => <AdminF787Model[]>res);

    }

    private serializeModels(data?: any): string {
       return data ? `&models=${JSON.stringify([data])}` : '';
    }
}
