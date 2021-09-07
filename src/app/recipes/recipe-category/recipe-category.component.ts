import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Category } from '../mealCategory.model';

@Component({
  selector: 'app-recipe-category',
  templateUrl: './recipe-category.component.html',
  styleUrls: ['./recipe-category.component.css'],
})
export class RecipeCategoryComponent implements OnInit {
  public preferenceList;
  public mealTypeList;
  public selectedPreference: any;
  public selectedMealType: any;
  public onChange: any;

  categories: Category[] = [];
  constructor(private categoriesService: CategoriesService) { }
  categories$ = this.categoriesService.getAll();

  ngOnInit(): void {
    this.preferenceList = [
      { id: 'none', name: 'No allergies' },
      { id: '&health=peanut-free', name: 'Peanut free' },
      { id: '&health=gluten-free', name: 'Gluten free' },
      { id: '&health=vegan', name: 'Vegan' },
      { id: '&health=low-sugar', name: 'Low on sugar' },
      { id: '&health=egg-free', name: 'Egg free' },
      { id: '&health=fish-free', name: 'Fish free' },
      { id: '&health=red-meat-free', name: 'No red meat' },
    ];

    this.mealTypeList = [
      { id: 'Main', name: 'Main Course' },
      { id: 'starter', name: 'starter' },
      { id: 'dessert', name: 'dessert' },
      { id: 'cocktail', name: 'drinks' },
    ];
    this.selectedPreference = 'none';
    this.selectedMealType = 'Main';
    this.onChange = (value: any) => { this.selectedPreference, this.selectedMealType };
  }
}
