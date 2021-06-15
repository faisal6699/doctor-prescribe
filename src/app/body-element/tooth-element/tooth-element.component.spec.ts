import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToothElementComponent } from './tooth-element.component';

describe('ToothElementComponent', () => {
  let component: ToothElementComponent;
  let fixture: ComponentFixture<ToothElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToothElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToothElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
