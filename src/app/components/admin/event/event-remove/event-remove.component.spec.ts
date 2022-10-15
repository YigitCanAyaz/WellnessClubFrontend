import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRemoveComponent } from './event-remove.component';

describe('EventRemoveComponent', () => {
  let component: EventRemoveComponent;
  let fixture: ComponentFixture<EventRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventRemoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
