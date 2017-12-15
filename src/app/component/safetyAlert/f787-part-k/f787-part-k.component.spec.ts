import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F787PartKComponent } from './f787-part-k.component';

describe('F787PartKComponent', () => {
  let component: F787PartKComponent;
  let fixture: ComponentFixture<F787PartKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F787PartKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F787PartKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
