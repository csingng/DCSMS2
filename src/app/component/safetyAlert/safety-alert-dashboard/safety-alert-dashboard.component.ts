import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../../../app.service';

@Component({
  selector: 'app-safety-alert-dashboard',
  templateUrl: './safety-alert-dashboard.component.html',
  styleUrls: ['./safety-alert-dashboard.component.scss']
})
export class SafetyAlertDashboardComponent implements OnInit {
  role = '';
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => {
        console.log('[SafetyAlertDashboardComponent]   params:', res);
        this.role = res.role;
      }
    );
  }
  public navigate(_routerLink): void {
    console.log('[SafetyAlertDashboardComponent]   _routerLink', _routerLink);
    this.router.navigate([_routerLink]);
  }
  ngOnInit() {
    console.log('[SafetyAlertDashboardComponent]   role:', this.role);
  }

}
