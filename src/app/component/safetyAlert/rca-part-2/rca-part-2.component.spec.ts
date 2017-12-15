import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcaPart2Component } from './rca-part-2.component';

describe('RcaPart2Component', () => {
  let component: RcaPart2Component;
  let fixture: ComponentFixture<RcaPart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcaPart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcaPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
