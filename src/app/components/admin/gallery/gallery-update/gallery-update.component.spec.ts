import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryUpdateComponent } from './gallery-update.component';

describe('GalleryUpdateComponent', () => {
  let component: GalleryUpdateComponent;
  let fixture: ComponentFixture<GalleryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
