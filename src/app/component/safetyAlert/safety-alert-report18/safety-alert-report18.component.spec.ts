import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAlertReport18Component } from './safety-alert-report18.component';

describe('SafetyAlertReport18Component', () => {
  let component: SafetyAlertReport18Component;
  let fixture: ComponentFixture<SafetyAlertReport18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyAlertReport18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyAlertReport18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
