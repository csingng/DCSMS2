import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAlertReport15Component } from './safety-alert-report15.component';

describe('SafetyAlertReport15Component', () => {
  let component: SafetyAlertReport15Component;
  let fixture: ComponentFixture<SafetyAlertReport15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyAlertReport15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyAlertReport15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
