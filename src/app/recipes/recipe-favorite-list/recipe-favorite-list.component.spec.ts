import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeUserListComponent } from './recipe-favorite-list.component';

describe('RecipeUserListComponent', () => {
  let component: RecipeUserListComponent;
  let fixture: ComponentFixture<RecipeUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeUserListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
