import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationRemoveComponent } from './collaboration-remove.component';

describe('CollaborationRemoveComponent', () => {
  let component: CollaborationRemoveComponent;
  let fixture: ComponentFixture<CollaborationRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaborationRemoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaborationRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
