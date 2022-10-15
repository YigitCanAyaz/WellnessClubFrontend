import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHeightRemoveComponent } from './user-height-remove.component';

describe('UserHeightRemoveComponent', () => {
  let component: UserHeightRemoveComponent;
  let fixture: ComponentFixture<UserHeightRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHeightRemoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHeightRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
