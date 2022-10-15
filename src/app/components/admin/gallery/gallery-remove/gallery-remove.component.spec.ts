import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryRemoveComponent } from './gallery-remove.component';

describe('GalleryRemoveComponent', () => {
  let component: GalleryRemoveComponent;
  let fixture: ComponentFixture<GalleryRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryRemoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
