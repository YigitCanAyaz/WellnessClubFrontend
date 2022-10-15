import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightAddComponent } from './height-add.component';

describe('HeightAddComponent', () => {
  let component: HeightAddComponent;
  let fixture: ComponentFixture<HeightAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeightAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeightAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
