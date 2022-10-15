import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHeightAddComponent } from './user-height-add.component';

describe('UserHeightAddComponent', () => {
  let component: UserHeightAddComponent;
  let fixture: ComponentFixture<UserHeightAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHeightAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHeightAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
