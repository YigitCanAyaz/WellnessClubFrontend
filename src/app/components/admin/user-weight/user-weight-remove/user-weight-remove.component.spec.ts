import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWeightRemoveComponent } from './user-weight-remove.component';

describe('UserWeightRemoveComponent', () => {
  let component: UserWeightRemoveComponent;
  let fixture: ComponentFixture<UserWeightRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWeightRemoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWeightRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
