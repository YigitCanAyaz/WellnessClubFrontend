import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationUpdateComponent } from './collaboration-update.component';

describe('CollaborationUpdateComponent', () => {
  let component: CollaborationUpdateComponent;
  let fixture: ComponentFixture<CollaborationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaborationUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaborationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
