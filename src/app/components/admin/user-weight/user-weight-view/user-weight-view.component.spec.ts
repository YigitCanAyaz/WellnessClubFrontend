import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWeightViewComponent } from './user-weight-view.component';

describe('UserWeightViewComponent', () => {
  let component: UserWeightViewComponent;
  let fixture: ComponentFixture<UserWeightViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWeightViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWeightViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
