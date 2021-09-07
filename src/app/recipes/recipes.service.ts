import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Meal } from './meal.model';
import { Category } from './mealCategory.model';
import { HttpParams } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

export interface ApiMeal {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate?: any;
  strCategory?: string;
  strArea?: string;
  strInstructions?: string;
  strMealThumb: string;
  strTags?: string;
  strYoutube?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strIngredient16?: string;
  strIngredient17?: string;
  strIngredient18?: string;
  strIngredient19?: string;
  strIngredient20?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
  strMeasure8?: string;
  strMeasure9?: string;
  strMeasure10?: string;
  strMeasure11?: string;
  strMeasure12?: string;
  strMeasure13?: string;
  strMeasure14?: string;
  strMeasure15?: string;
  strMeasure16?: string;
  strMeasure17?: string;
  strMeasure18?: string;
  strMeasure19?: string;
  strMeasure20?: string;
  strSource?: string;
  strImageSource?: any;
  strCreativeCommonsConfirmed?: any;
  dateModified?: any;
}

interface ApiReply {
  meals: ApiMeal[];
}

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://www.themealdb.com/api/json/v1/1';
  }

  getAll(params: { categoryName?: string; search?: string }) {
    let httpParams = new HttpParams();
    let apiRequest: Observable<ApiReply> = null;
    if (params.categoryName) {
      httpParams = httpParams.set('c', params.categoryName);
      apiRequest = this.http.get<ApiReply>(`${this.baseUrl}/filter.php`, {
        params: httpParams,
      });
    } else if (params.search) {
      httpParams = httpParams.set('s', params.search);
      apiRequest = this.http.get<ApiReply>(`${this.baseUrl}/search.php`, {
        params: httpParams,
      });
    }

    return apiRequest.pipe(
      // checka in apiReply för meal information
      map((apiReply) => apiReply.meals),
      // för varje måltid i meals, formatera ingridienter
      map((apiMeals) =>
        apiMeals.map((apiMeal) => this.formatMealIngredientsMeasures(apiMeal))
      )
    );
  }

  getOne(id: string) {
    let httpParams = new HttpParams().set('i', id);
    return this.http
      .get<ApiReply>(`${this.baseUrl}/lookup.php`, { params: httpParams })
      .pipe(
        map((apiReply) => apiReply.meals[0]),
        map((apiMeal) => this.formatMealIngredientsMeasures(apiMeal))
      );
  }
  formatMealIngredientsMeasures(apiMeal: ApiMeal): Meal {
    const ingredientsMeasures = [];
    for (let i = 0; i <= 20; i++) {
      const ingredient = apiMeal[`strIngredient${i}`];
      const measurement = apiMeal[`strMeasure${i}`];
      if (ingredient && measurement) {
        ingredientsMeasures.push({ measurement, ingredient });
      }
    }
    // kopiera gammal info + ny info till objektet
    return { ...apiMeal, ingredientsMeasures };
  }

  getOneRandom() {
    return this.http.get<ApiReply>(`${this.baseUrl}/random.php`).pipe(
      //få första meal
      map((apiReply) => apiReply.meals[0]),
      map((apiMeal) => this.formatMealIngredientsMeasures(apiMeal))
    );
  }

  getFiveRandom() {
    return forkJoin([
      this.getOneRandom(),
      this.getOneRandom(),
      this.getOneRandom(),
      this.getOneRandom(),
      this.getOneRandom(),
    ]);
  }
}
