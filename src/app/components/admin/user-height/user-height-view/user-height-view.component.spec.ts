import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHeightViewComponent } from './user-height-view.component';

describe('UserHeightViewComponent', () => {
  let component: UserHeightViewComponent;
  let fixture: ComponentFixture<UserHeightViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHeightViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHeightViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
