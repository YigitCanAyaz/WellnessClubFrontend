import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightViewComponent } from './height-view.component';

describe('HeightViewComponent', () => {
  let component: HeightViewComponent;
  let fixture: ComponentFixture<HeightViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeightViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeightViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
