import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightRemoveComponent } from './weight-remove.component';

describe('WeightRemoveComponent', () => {
  let component: WeightRemoveComponent;
  let fixture: ComponentFixture<WeightRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightRemoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeightRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
