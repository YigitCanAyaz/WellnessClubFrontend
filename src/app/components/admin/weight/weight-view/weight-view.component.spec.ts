import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightViewComponent } from './weight-view.component';

describe('WeightViewComponent', () => {
  let component: WeightViewComponent;
  let fixture: ComponentFixture<WeightViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeightViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
