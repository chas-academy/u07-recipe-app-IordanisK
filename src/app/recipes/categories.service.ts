import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Meal } from './meal.model';
import { Category } from './mealCategory.model';
import { HttpParams } from '@angular/common/http';

interface ApiReply {
  categories: Category[];
}

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete?query=appl&number=10';
  }

  getAll() {
    return this.http
      .get<ApiReply>(`${this.baseUrl}/categories.php`)
      .pipe(map((apiReply) => apiReply.categories));
  }
}
