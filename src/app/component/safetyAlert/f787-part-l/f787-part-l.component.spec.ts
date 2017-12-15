import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F787PartLComponent } from './f787-part-l.component';

describe('F787PartLComponent', () => {
  let component: F787PartLComponent;
  let fixture: ComponentFixture<F787PartLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F787PartLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F787PartLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
