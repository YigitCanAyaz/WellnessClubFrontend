import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWeightListComponent } from './user-weight-list.component';

describe('UserWeightListComponent', () => {
  let component: UserWeightListComponent;
  let fixture: ComponentFixture<UserWeightListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWeightListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWeightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
