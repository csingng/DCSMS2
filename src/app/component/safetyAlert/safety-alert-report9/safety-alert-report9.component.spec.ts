import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAlertReport9Component } from './safety-alert-report9.component';

describe('SafetyAlertReport9Component', () => {
  let component: SafetyAlertReport9Component;
  let fixture: ComponentFixture<SafetyAlertReport9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyAlertReport9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyAlertReport9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
