import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAlertReport10Component } from './safety-alert-report10.component';

describe('SafetyAlertReport10Component', () => {
  let component: SafetyAlertReport10Component;
  let fixture: ComponentFixture<SafetyAlertReport10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyAlertReport10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyAlertReport10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
