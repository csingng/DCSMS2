import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAlertReport4Component } from './safety-alert-report4.component';

describe('SafetyAlertReport4Component', () => {
  let component: SafetyAlertReport4Component;
  let fixture: ComponentFixture<SafetyAlertReport4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyAlertReport4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyAlertReport4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
