import { Component, OnInit } from '@angular/core';
import { RecipeFavoritesService } from '../recipe-favorites.service';
@Component({
  selector: 'app-recipe-favorite-list',
  templateUrl: './recipe-favorite-list.component.html',
  styleUrls: ['./recipe-favorite-list.component.css'],
})
export class RecipeUserListComponent implements OnInit {
  constructor(private recipeFavoritesService: RecipeFavoritesService) {}
  userRecipes$ = this.recipeFavoritesService.userRecipes$;
  ngOnInit(): void {}

  deleteRecipe(id: string) {
    this.recipeFavoritesService.delete(id);
  }
}
