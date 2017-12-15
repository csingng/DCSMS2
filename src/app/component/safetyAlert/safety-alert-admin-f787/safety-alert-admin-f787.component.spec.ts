import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAlertAdminF787Component } from './safety-alert-admin-f787.component';

describe('SafetyAlertAdminF787Component', () => {
  let component: SafetyAlertAdminF787Component;
  let fixture: ComponentFixture<SafetyAlertAdminF787Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyAlertAdminF787Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyAlertAdminF787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
