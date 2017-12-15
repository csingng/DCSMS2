import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAlertReport7Component } from './safety-alert-report7.component';

describe('SafetyAlertReport7Component', () => {
  let component: SafetyAlertReport7Component;
  let fixture: ComponentFixture<SafetyAlertReport7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyAlertReport7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyAlertReport7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
