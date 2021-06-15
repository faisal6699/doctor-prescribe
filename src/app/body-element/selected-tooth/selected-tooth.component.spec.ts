import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedToothComponent } from './selected-tooth.component';

describe('SelectedToothComponent', () => {
  let component: SelectedToothComponent;
  let fixture: ComponentFixture<SelectedToothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedToothComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedToothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
