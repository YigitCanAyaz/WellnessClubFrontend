import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightListComponent } from './height-list.component';

describe('HeightListComponent', () => {
  let component: HeightListComponent;
  let fixture: ComponentFixture<HeightListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeightListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
