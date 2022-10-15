import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWeightAddComponent } from './user-weight-add.component';

describe('UserWeightAddComponent', () => {
  let component: UserWeightAddComponent;
  let fixture: ComponentFixture<UserWeightAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWeightAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWeightAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
