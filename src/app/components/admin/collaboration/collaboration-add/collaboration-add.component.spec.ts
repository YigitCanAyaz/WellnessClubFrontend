import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationAddComponent } from './collaboration-add.component';

describe('CollaborationAddComponent', () => {
  let component: CollaborationAddComponent;
  let fixture: ComponentFixture<CollaborationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaborationAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaborationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
