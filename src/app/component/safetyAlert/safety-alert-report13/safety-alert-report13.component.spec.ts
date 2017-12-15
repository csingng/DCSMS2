import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAlertReport13Component } from './safety-alert-report13.component';

describe('SafetyAlertReport13Component', () => {
  let component: SafetyAlertReport13Component;
  let fixture: ComponentFixture<SafetyAlertReport13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyAlertReport13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyAlertReport13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
