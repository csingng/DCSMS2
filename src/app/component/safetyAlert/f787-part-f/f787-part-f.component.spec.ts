import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F787PartFComponent } from './f787-part-f.component';

describe('F787PartFComponent', () => {
  let component: F787PartFComponent;
  let fixture: ComponentFixture<F787PartFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F787PartFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F787PartFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
