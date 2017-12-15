import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAlertReport3Component } from './safety-alert-report3.component';

describe('SafetyAlertReport3Component', () => {
  let component: SafetyAlertReport3Component;
  let fixture: ComponentFixture<SafetyAlertReport3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyAlertReport3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyAlertReport3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
