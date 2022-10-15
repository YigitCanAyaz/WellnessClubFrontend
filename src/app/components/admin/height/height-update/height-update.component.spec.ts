import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightUpdateComponent } from './height-update.component';

describe('HeightUpdateComponent', () => {
  let component: HeightUpdateComponent;
  let fixture: ComponentFixture<HeightUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeightUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeightUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
