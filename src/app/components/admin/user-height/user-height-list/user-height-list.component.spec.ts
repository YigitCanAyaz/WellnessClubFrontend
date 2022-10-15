import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHeightListComponent } from './user-height-list.component';

describe('UserHeightListComponent', () => {
  let component: UserHeightListComponent;
  let fixture: ComponentFixture<UserHeightListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHeightListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHeightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
