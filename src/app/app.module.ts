import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

import { NgModule, ApplicationRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  HttpClient,
  HttpClientModule,
  HttpClientJsonpModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// Import the Kendo Module
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { PanelBarModule, LayoutModule } from '@progress/kendo-angular-layout';
import { PopupModule } from '@progress/kendo-angular-popup';
import { UploadModule } from '@progress/kendo-angular-upload';
import { RippleModule } from '@progress/kendo-angular-ripple';
import {
  process,
  orderBy,
  filterBy,
  groupBy,
  aggregateBy
} from '@progress/kendo-data-query';

// Serivce: Safety Alert
import { SafetyAlertF787IndexService } from './service/safetyAlert/safety-alert-f787-index.service';
import { AdminF787Service } from './service/safetyAlert/admin-f787.service';
import { AdminContractsService } from './service/safetyAlert/admin-contracts.service';

// Component
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InteralStateType } from './app.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// Component: core
import { IndexComponent } from './core/index/index.component';
import { MenuComponent } from './core/menu/menu.component';
import { LoginComponent } from './core/login/login.component';
import { FirstPageComponent } from './core/first-page/first-page.component';


import { SafetyAlertF787IndexComponent } from './component/safetyAlert/safety-alert-f787-index/safety-alert-f787-index.component';
import { SafetyAlertReportMenuComponent } from './component/safetyAlert/safety-alert-report-menu/safety-alert-report-menu.component';
import { SafetyAlertReport1Component } from './component/safetyAlert/safety-alert-report1/safety-alert-report1.component';
import { SafetyAlertReport2Component } from './component/safetyAlert/safety-alert-report2/safety-alert-report2.component';
import { SafetyAlertReport3Component } from './component/safetyAlert/safety-alert-report3/safety-alert-report3.component';
import { SafetyAlertReport4Component } from './component/safetyAlert/safety-alert-report4/safety-alert-report4.component';
import { SafetyAlertReport5Component } from './component/safetyAlert/safety-alert-report5/safety-alert-report5.component';
import { SafetyAlertReport6Component } from './component/safetyAlert/safety-alert-report6/safety-alert-report6.component';
import { SafetyAlertReport7Component } from './component/safetyAlert/safety-alert-report7/safety-alert-report7.component';
import { SafetyAlertReport8Component } from './component/safetyAlert/safety-alert-report8/safety-alert-report8.component';
import { SafetyAlertReport9Component } from './component/safetyAlert/safety-alert-report9/safety-alert-report9.component';
import { SafetyAlertReport10Component } from './component/safetyAlert/safety-alert-report10/safety-alert-report10.component';
import { SafetyAlertReport11Component } from './component/safetyAlert/safety-alert-report11/safety-alert-report11.component';
import { SafetyAlertReport12Component } from './component/safetyAlert/safety-alert-report12/safety-alert-report12.component';
import { SafetyAlertReport13Component } from './component/safetyAlert/safety-alert-report13/safety-alert-report13.component';
import { SafetyAlertReport14Component } from './component/safetyAlert/safety-alert-report14/safety-alert-report14.component';
import { SafetyAlertReport15Component } from './component/safetyAlert/safety-alert-report15/safety-alert-report15.component';
import { SafetyAlertReport16Component } from './component/safetyAlert/safety-alert-report16/safety-alert-report16.component';
import { SafetyAlertReport17Component } from './component/safetyAlert/safety-alert-report17/safety-alert-report17.component';
import { SafetyAlertReport18Component } from './component/safetyAlert/safety-alert-report18/safety-alert-report18.component';
import { SafetyAlertReport19Component } from './component/safetyAlert/safety-alert-report19/safety-alert-report19.component';
import { F787MainComponent } from './component/safetyAlert/f787-main/f787-main.component';
import { F787PartAComponent } from './component/safetyAlert/f787-part-a/f787-part-a.component';
import { F787PartBComponent } from './component/safetyAlert/f787-part-b/f787-part-b.component';
import { F787PartCComponent } from './component/safetyAlert/f787-part-c/f787-part-c.component';
import { F787PartDComponent } from './component/safetyAlert/f787-part-d/f787-part-d.component';
import { F787PartEComponent } from './component/safetyAlert/f787-part-e/f787-part-e.component';
import { F787PartFComponent } from './component/safetyAlert/f787-part-f/f787-part-f.component';
import { F787PartGComponent } from './component/safetyAlert/f787-part-g/f787-part-g.component';
import { F787PartHComponent } from './component/safetyAlert/f787-part-h/f787-part-h.component';
import { F787PartIComponent } from './component/safetyAlert/f787-part-i/f787-part-i.component';
import { F787PartJComponent } from './component/safetyAlert/f787-part-j/f787-part-j.component';
import { F787PartKComponent } from './component/safetyAlert/f787-part-k/f787-part-k.component';
import { F787PartLComponent } from './component/safetyAlert/f787-part-l/f787-part-l.component';
import { RcaMainComponent } from './component/safetyAlert/rca-main/rca-main.component';
import { RcaPart1Component } from './component/safetyAlert/rca-part-1/rca-part-1.component';
import { RcaPart2Component } from './component/safetyAlert/rca-part-2/rca-part-2.component';
import { RcaPart3Component } from './component/safetyAlert/rca-part-3/rca-part-3.component';
import { SafetyAlertAdminF787Component } from './component/safetyAlert/safety-alert-admin-f787/safety-alert-admin-f787.component';
import { SafetyAlertAdminContractsEditComponent } from './component/safetyAlert/safety-alert-admin-contracts-edit/safety-alert-admin-contracts-edit.component';
import { SafetyAlertAdminContractsListComponent } from './component/safetyAlert/safety-alert-admin-contracts-list/safety-alert-admin-contracts-list.component';
import { SafetyAlertSiteComponent } from './component/safetyAlert/safety-alert-site/safety-alert-site.component';
import { SafetyAlertF787MaintainComponent } from './component/safetyAlert/safety-alert-f787-maintain/safety-alert-f787-maintain.component';
import { SafetyAlertDashboardComponent } from './component/safetyAlert/safety-alert-dashboard/safety-alert-dashboard.component';
import { SafetyAlertAccidentRate1Component } from './component/safetyAlert/safety-alert-accident-rate1/safety-alert-accident-rate1.component';
import { SafetyAlertAccidentRate2Component } from './component/safetyAlert/safety-alert-accident-rate2/safety-alert-accident-rate2.component';
import { SafetyAlertAccidentStat1Component } from './component/safetyAlert/safety-alert-accident-stat1/safety-alert-accident-stat1.component';
import { SafetyAlertAccidentStat2Component } from './component/safetyAlert/safety-alert-accident-stat2/safety-alert-accident-stat2.component';
import { SafetyAlertReportIndexComponent } from './component/safetyAlert/safety-alert-report-index/safety-alert-report-index.component';


// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InteralStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MenuComponent,
    LoginComponent,
    FirstPageComponent,

    SafetyAlertF787IndexComponent,
    SafetyAlertReportMenuComponent,
    SafetyAlertReport1Component,
    SafetyAlertReport2Component,
    SafetyAlertReport3Component,
    SafetyAlertReport4Component,
    SafetyAlertReport5Component,
    SafetyAlertReport6Component,
    SafetyAlertReport7Component,
    SafetyAlertReport8Component,
    SafetyAlertReport9Component,
    SafetyAlertReport10Component,
    SafetyAlertReport11Component,
    SafetyAlertReport12Component,
    SafetyAlertReport13Component,
    SafetyAlertReport14Component,
    SafetyAlertReport15Component,
    SafetyAlertReport16Component,
    SafetyAlertReport17Component,
    SafetyAlertReport18Component,
    SafetyAlertReport19Component,
    F787MainComponent,
    F787PartAComponent,
    F787PartBComponent,
    F787PartCComponent,
    F787PartDComponent,
    F787PartEComponent,
    F787PartFComponent,
    F787PartGComponent,
    F787PartHComponent,
    F787PartIComponent,
    F787PartJComponent,
    F787PartKComponent,
    F787PartLComponent,
    RcaMainComponent,
    RcaPart1Component,
    RcaPart2Component,
    RcaPart3Component,
    SafetyAlertAdminF787Component,
    SafetyAlertAdminContractsEditComponent,
    SafetyAlertAdminContractsListComponent,
    SafetyAlertSiteComponent,
    SafetyAlertF787MaintainComponent,
    SafetyAlertDashboardComponent,
    SafetyAlertAccidentRate1Component,
    SafetyAlertAccidentRate2Component,
    SafetyAlertAccidentStat1Component,
    SafetyAlertAccidentStat2Component,
    SafetyAlertReportIndexComponent
    // Safety Alert

  ],
  imports: [
    // Register the Angular Modules
    HttpClientModule,
    HttpClientJsonpModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

    MDBBootstrapModule.forRoot(),

    // Register the Kendo Modules
    InputsModule,
    PanelBarModule,
    LayoutModule,
    ButtonsModule,
    GridModule,
    DateInputsModule,
    PopupModule,
    RippleModule,
    DialogModule,
    DropDownsModule,
    UploadModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [APP_PROVIDERS, SafetyAlertF787IndexService, AdminF787Service, AdminContractsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
