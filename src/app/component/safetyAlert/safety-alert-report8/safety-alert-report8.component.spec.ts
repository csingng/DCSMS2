import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAlertReport8Component } from './safety-alert-report8.component';

describe('SafetyAlertReport8Component', () => {
  let component: SafetyAlertReport8Component;
  let fixture: ComponentFixture<SafetyAlertReport8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyAlertReport8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyAlertReport8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
