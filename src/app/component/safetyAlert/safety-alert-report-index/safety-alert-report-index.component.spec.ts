import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAlertReportIndexComponent } from './safety-alert-report-index.component';

describe('SafetyAlertReportIndexComponent', () => {
  let component: SafetyAlertReportIndexComponent;
  let fixture: ComponentFixture<SafetyAlertReportIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyAlertReportIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyAlertReportIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
