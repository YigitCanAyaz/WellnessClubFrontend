import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHeightComponent } from './user-height.component';

describe('UserHeightComponent', () => {
  let component: UserHeightComponent;
  let fixture: ComponentFixture<UserHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHeightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
