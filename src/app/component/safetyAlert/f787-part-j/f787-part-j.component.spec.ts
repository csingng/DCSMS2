import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F787PartJComponent } from './f787-part-j.component';

describe('F787PartJComponent', () => {
  let component: F787PartJComponent;
  let fixture: ComponentFixture<F787PartJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F787PartJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F787PartJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
