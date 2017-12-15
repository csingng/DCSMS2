import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './core/index/index.component';
import { LoginComponent } from './core/login/login.component';
import { FirstPageComponent } from './core/first-page/first-page.component';
import { SafetyAlertF787IndexComponent } from './component/safetyAlert/safety-alert-f787-index/safety-alert-f787-index.component';
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
import { RcaMainComponent } from './component/safetyAlert/rca-main/rca-main.component';
import { SafetyAlertAdminF787Component } from './component/safetyAlert/safety-alert-admin-f787/safety-alert-admin-f787.component';
import { SafetyAlertAdminContractsEditComponent } from './component/safetyAlert/safety-alert-admin-contracts-edit/safety-alert-admin-contracts-edit.component';
import { SafetyAlertAdminContractsListComponent } from './component/safetyAlert/safety-alert-admin-contracts-list/safety-alert-admin-contracts-list.component';
import { SafetyAlertSiteComponent } from './component/safetyAlert/safety-alert-site/safety-alert-site.component';
import { SafetyAlertF787MaintainComponent } from './component/safetyAlert/safety-alert-f787-maintain/safety-alert-f787-maintain.component';
import { SafetyAlertDashboardComponent } from './component/safetyAlert/safety-alert-dashboard/safety-alert-dashboard.component';
import { SafetyAlertReportIndexComponent } from './component/safetyAlert/safety-alert-report-index/safety-alert-report-index.component';

const routes: Routes = [
  { path: '', component: FirstPageComponent },
  { path: 'safetyAlert/dashboard', component: SafetyAlertDashboardComponent },
  { path: 'safetyAlert/f787Maintain', component: SafetyAlertF787MaintainComponent },
  { path: 'safetyAlert/adminContractsList', component: SafetyAlertAdminContractsListComponent },
  { path: 'safetyAlert/adminContractsEdit', component: SafetyAlertAdminContractsEditComponent },
  { path: 'safetyAlert/site', component: SafetyAlertSiteComponent },
  { path: 'safetyAlert/f787Main', component: F787MainComponent },
  { path: 'safetyAlert/rca', component: RcaMainComponent },

  { path: 'safetyAlert/reportIndex', component: SafetyAlertReportIndexComponent },
  { path: 'safetyAlert/report1', component: SafetyAlertReport1Component },
  { path: 'safetyAlert/report2', component: SafetyAlertReport2Component },
  { path: 'safetyAlert/report3', component: SafetyAlertReport3Component },
  { path: 'safetyAlert/report4', component: SafetyAlertReport4Component },
  { path: 'safetyAlert/report5', component: SafetyAlertReport5Component },
  { path: 'safetyAlert/report6', component: SafetyAlertReport6Component },
  { path: 'safetyAlert/report7', component: SafetyAlertReport7Component },
  { path: 'safetyAlert/report8', component: SafetyAlertReport8Component },
  { path: 'safetyAlert/report9', component: SafetyAlertReport9Component },
  { path: 'safetyAlert/report10', component: SafetyAlertReport10Component },
  { path: 'safetyAlert/report11', component: SafetyAlertReport11Component },
  { path: 'safetyAlert/report12', component: SafetyAlertReport12Component },
  { path: 'safetyAlert/report13', component: SafetyAlertReport13Component },
  { path: 'safetyAlert/report14', component: SafetyAlertReport14Component },
  { path: 'safetyAlert/report15', component: SafetyAlertReport15Component },
  { path: 'safetyAlert/report16', component: SafetyAlertReport16Component },
  { path: 'safetyAlert/report17', component: SafetyAlertReport17Component },
  { path: 'safetyAlert/report18', component: SafetyAlertReport18Component },
  { path: 'safetyAlert/report19', component: SafetyAlertReport19Component },
  { path: 'safetyAlert/f787Index', component: SafetyAlertF787IndexComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{ enableTracing: true })
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
