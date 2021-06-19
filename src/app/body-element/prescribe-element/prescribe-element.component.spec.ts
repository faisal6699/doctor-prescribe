import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescribeElementComponent } from './prescribe-element.component';

describe('PrescribeElementComponent', () => {
  let component: PrescribeElementComponent;
  let fixture: ComponentFixture<PrescribeElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescribeElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescribeElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
