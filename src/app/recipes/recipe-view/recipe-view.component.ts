import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Meal } from '../meal.model';
import { RecipeFavoritesService } from '../recipe-favorites.service';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css'],
})
export class RecipeViewComponent implements OnInit {
  recipe: Meal;
  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    private recipeFavoritesService: RecipeFavoritesService
  ) { }

  ngOnInit(): void {
    // ta id från receptet från route:: http://localhost:4200/recipes/52906 = {id: "52906"}
    this.route.params.subscribe((params) => {
      // använd getOne metod från recipeService för att komma åt meal
      this.recipesService
        .getOne(params.id)
        // assigna recipe till komponenten så man kommer åt den 
        .subscribe((recipe) => (this.recipe = recipe));
    });
  }

  addRecipe(id: string, meal: string, image: string) {
    this.recipeFavoritesService.add(id, meal, image);
  }
}
