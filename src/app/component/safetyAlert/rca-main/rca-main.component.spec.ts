import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcaMainComponent } from './rca-main.component';

describe('RcaMainComponent', () => {
  let component: RcaMainComponent;
  let fixture: ComponentFixture<RcaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
