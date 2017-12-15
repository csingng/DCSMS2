import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAlertReport2Component } from './safety-alert-report2.component';

describe('SafetyAlertReport2Component', () => {
  let component: SafetyAlertReport2Component;
  let fixture: ComponentFixture<SafetyAlertReport2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyAlertReport2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyAlertReport2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
