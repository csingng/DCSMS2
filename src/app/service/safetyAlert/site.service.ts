import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { SiteModel } from '../../model/safetyAlert/site.model';



import _ from 'lodash';

const CREATE_ACTION = 'create';
const UPDATE_ACTION = 'update';
const REMOVE_ACTION = 'destroy';
const siteSummaries = [
    { siteName: 'Cheung Sha Wan', contractor: 'Construction Company A', contractNumber: '20140345', contractTitle: 'Cheung Sha Wan Site' },
    { siteName: 'Ex-Cheung Sha Wan Police Quarters', contractor: 'Construction Company A', contractNumber: '20100004', contractTitle: 'Construnction of Development for Ex-Cheung Sha Wan Police Quarters' },
    { siteName: 'Kai Tak Site 1A Phase 1 & 2', contractor: 'Construction Company A', contractNumber: '20090097', contractTitle: 'Construnction of Public Housing Development at Kai Tak Site 1A Phases 1 & 2' },
    { siteName: 'LNTK2&6', contractor: 'Construction Company B', contractNumber: '20120141', contractTitle: 'Construction of LNTK 2&6, TT8, HMT'},
    { siteName: 'Sha Tin Area 52 Ph 10A', contractor: 'Construction Company B', contractNumber: '20150000', contractTitle: 'Sha Tin Area 52 Phase 10' },
    { siteName: 'Sha Tin Area 52 Ph 10B', contractor: 'Construction Company B', contractNumber: '20150000', contractTitle: 'Sha Tin Area 52 Phase 10' },
  ];

@Injectable()
export class SiteService extends BehaviorSubject<SiteModel[]> {
    constructor(private http: HttpClient) {
        super([]);
    }

    private data: SiteModel[] = siteSummaries;

    public read() {
      var _that = this;
      console.log('[SiteService.read]  STARTED');
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
      console.log('[SiteService.save]  STARTED');
        const action = isNew ? CREATE_ACTION : UPDATE_ACTION;

        this.reset();
        /*
        this.fetch(action, data)
            .subscribe(() => this.read(), () => this.read());
        */
    }

    public remove(data: any) {
      console.log('[SiteService.remove]  STARTED');
        this.reset();
        /*
        this.fetch(REMOVE_ACTION, data)
            .subscribe(() => this.read(), () => this.read());
        */
    }

    public resetItem(dataItem: any) {
      console.log('[SiteService.resetItem]  STARTED');
        if (!dataItem) { return; }

        //find orignal data item
        const originalDataItem = this.data.find(item => item.contractNumber === dataItem.contractNumber);

        //revert changes
        Object.assign(originalDataItem, dataItem);

        super.next(this.data);
    }

    private reset() {
        console.log('[SiteService.reset]  STARTED');
        this.data = [];
    }

    private fetch(action: string = "", data?: any): Observable<SiteModel[]>  {
        console.log('[SiteService.fetch]  STARTED');

        return this.http
          .jsonp(`https://demos.telerik.com/kendo-ui/service/Contracts/${action}?${this.serializeModels(data)}`, 'callback')
          .map(res => <SiteModel[]>res);

    }

    private serializeModels(data?: any): string {
       return data ? `&models=${JSON.stringify([data])}` : '';
    }
}
