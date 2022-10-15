import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightAddComponent } from './weight-add.component';

describe('WeightAddComponent', () => {
  let component: WeightAddComponent;
  let fixture: ComponentFixture<WeightAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeightAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
