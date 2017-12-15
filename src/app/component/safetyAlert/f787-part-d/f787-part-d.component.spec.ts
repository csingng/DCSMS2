import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F787PartDComponent } from './f787-part-d.component';

describe('F787PartDComponent', () => {
  let component: F787PartDComponent;
  let fixture: ComponentFixture<F787PartDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F787PartDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F787PartDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
