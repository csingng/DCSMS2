import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAlertReport5Component } from './safety-alert-report5.component';

describe('SafetyAlertReport5Component', () => {
  let component: SafetyAlertReport5Component;
  let fixture: ComponentFixture<SafetyAlertReport5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyAlertReport5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyAlertReport5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
