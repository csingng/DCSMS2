import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../../app.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  role: string = null;
  safetyAlertRoles: Array<any> = [
    {label: 'OSHC User', key: 'oshcUser'},
    {label: 'HA Site Staff', key: 'haSiteStaff'},
    {label: 'HA Professional Officer', key: 'haProfessionalStaff'},
    {label: 'Contractor', key: 'contractor'},
    {label: 'Contract Manager', key: 'contractManager'},
    {label: 'CRC Secretary', key: 'crcSecretary'},
  ];

  constructor(private route: ActivatedRoute, private router: Router, public appState: AppState) {
    this.route.params.subscribe(res => console.log('[FirstPageComponent]   params:', res));
  }
  ngOnInit() {
  }
  public navigate(_routerLink): void {
    console.log('[FirstPageComponent]   _routerLink', _routerLink);
    this.router.navigate([_routerLink]);
  }
  submitSafetyAlertRole(_role) {
    this.appState.set('role', _role);
    this.router.navigate(['safetyAlert/dashboard', {role: _role}]);
  }
}
