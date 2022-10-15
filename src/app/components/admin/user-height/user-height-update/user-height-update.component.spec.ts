import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHeightUpdateComponent } from './user-height-update.component';

describe('UserHeightUpdateComponent', () => {
  let component: UserHeightUpdateComponent;
  let fixture: ComponentFixture<UserHeightUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHeightUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHeightUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
