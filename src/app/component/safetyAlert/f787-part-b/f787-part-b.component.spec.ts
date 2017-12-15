import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F787PartBComponent } from './f787-part-b.component';

describe('F787PartBComponent', () => {
  let component: F787PartBComponent;
  let fixture: ComponentFixture<F787PartBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F787PartBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F787PartBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
