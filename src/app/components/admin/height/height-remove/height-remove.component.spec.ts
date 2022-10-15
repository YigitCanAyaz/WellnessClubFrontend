import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightRemoveComponent } from './height-remove.component';

describe('HeightRemoveComponent', () => {
  let component: HeightRemoveComponent;
  let fixture: ComponentFixture<HeightRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeightRemoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeightRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
