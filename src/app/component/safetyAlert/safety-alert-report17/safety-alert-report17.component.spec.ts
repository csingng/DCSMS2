import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAlertReport17Component } from './safety-alert-report17.component';

describe('SafetyAlertReport17Component', () => {
  let component: SafetyAlertReport17Component;
  let fixture: ComponentFixture<SafetyAlertReport17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyAlertReport17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyAlertReport17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
