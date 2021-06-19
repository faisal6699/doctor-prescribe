import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescribeElementComplaintComponent } from './prescribe-element-complaint.component';

describe('PrescribeElementComplaintComponent', () => {
  let component: PrescribeElementComplaintComponent;
  let fixture: ComponentFixture<PrescribeElementComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescribeElementComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescribeElementComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
