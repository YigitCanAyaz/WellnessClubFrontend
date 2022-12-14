import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeRemoveComponent } from './recipe-remove.component';

describe('RecipeRemoveComponent', () => {
  let component: RecipeRemoveComponent;
  let fixture: ComponentFixture<RecipeRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeRemoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
