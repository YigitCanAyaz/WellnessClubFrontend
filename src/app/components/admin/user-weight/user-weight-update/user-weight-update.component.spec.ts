import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWeightUpdateComponent } from './user-weight-update.component';

describe('UserWeightUpdateComponent', () => {
  let component: UserWeightUpdateComponent;
  let fixture: ComponentFixture<UserWeightUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWeightUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWeightUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
