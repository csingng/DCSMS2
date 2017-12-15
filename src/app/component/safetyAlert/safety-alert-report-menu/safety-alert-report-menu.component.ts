import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-safety-alert-report-menu',
  templateUrl: './safety-alert-report-menu.component.html',
  styleUrls: ['./safety-alert-report-menu.component.scss']
})
export class SafetyAlertReportMenuComponent implements OnInit {
  public selectedReportURL: string = "";
  public events: string[] = [];

  public source: Array<any> = [
    {text: "Report 1: Accident data of HA contracts against construction industry and Development Bureau by years", routerLink: "safetyAlert/report1"},
    {text: "Report 2: Fatality rate per 1,000 workers of New Works contracts, and M&I contracts against construction industry per year", routerLink: "safetyAlert/report2"},
    {text: "Report 3: Non-reportable accident rate per 1,000 workers of New Works contracts by year", routerLink: "safetyAlert/report3"},
    {text: "Report 4: Accident rate per 1,000 workers of New Works contracts, and M&I contracts against construction industry by year", routerLink: "safetyAlert/report4"},
    {text: "Report 5: Annualised accident rate per 1,000 workers of New Works contracts by month in x period. HA: All construction sites with one control limit (i.e. HA target)", routerLink: "safetyAlert/report5"},
    {text: "Report 6: Annualized accumulative accident rate per 1,000 workers of New Works contracts by month in x period. Individual site within 4 limits (warning, target and alert of HA, contractors corporate)", routerLink: "safetyAlert/report6"},
    {text: "Report 7: Accident rate per 1,000 workers of HA New Works contracts by contract number. HA: All active and completed sites / building sites / engineering sites of New Works contracts with HA control limit", routerLink: "safetyAlert/report7"},
    {text: "Report 9: Types of accidents of HA New Works Contracts by year", routerLink: "safetyAlert/report9"},
    {text: "Report 10: Types of accident of HA M&I Works Contracts by year", routerLink: "safetyAlert/report10"},
    {text: "Report 11: All reportable and non-reportable accidents of HA New Works Contracts by type of accident by year", routerLink: "safetyAlert/report11"},
    {text: "Report 12: Accidents of HA New Works Contracts by Occupation by year", routerLink: "safetyAlert/report12"},
    {text: "Report 13: Accidents of HA New Works Contracts by Agent involved by year", routerLink: "safetyAlert/report13"},
    {text: "Report 14: Accidents of HA New Works Contracts by Unsafe Action by year", routerLink: "safetyAlert/report14"},
    {text: "Report 15: Accidents of HA New Works Contracts by Unsafe Condition involved by year", routerLink: "safetyAlert/report15"},
    {text: "Report 16: Accidents of HA New Works Contracts by Personal Factor by year", routerLink: "safetyAlert/report16"},
    {text: "Report 17: Accidents of HA New Works Contracts by Nature of Injury by year", routerLink: "safetyAlert/report17"},
    {text: "Report 18: Accidents of HA New Works Contracts by Body Part affected by year", routerLink: "safetyAlert/report18"},
    {text: "Report 19: Type of Accident vs Severity of Injury, Location of Accident vs Severity of Injury and Type of Injury vs Severity of Injury", routerLink: "safetyAlert/report19"}, 
  ];
  public data: Array<string>;

  constructor(private router: Router) { 
    this.data = this.source.slice();
  }
  public valueChange(selectedItem: any): void {
    console.log("valueChange", selectedItem);
    
    this.router.navigate([selectedItem.routerLink]);
  }
  public selectionChange(selectedItem: any): void {
  }
  public filterChange(filter: any): void {
      console.log("filterChange", filter);
      this.data = this.source.filter((s) => s.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }

  ngOnInit() {
  }
  public navigate(_routerLink): void {
    console.log('[SafetyAlertReportMenuComponent]   _routerLink', _routerLink);
    this.router.navigate([_routerLink]);
  }
}
