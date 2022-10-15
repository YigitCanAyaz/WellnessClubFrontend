import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightUpdateComponent } from './weight-update.component';

describe('WeightUpdateComponent', () => {
  let component: WeightUpdateComponent;
  let fixture: ComponentFixture<WeightUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeightUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
