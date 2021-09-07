import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipeLandingComponent } from './recipes/recipe-landing/recipe-landing.component';
import { RecipeUserListComponent } from './recipes/recipe-favorite-list/recipe-favorite-list.component';
import { RecipeViewComponent } from './recipes/recipe-view/recipe-view.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipeLandingComponent,
  },
  {
    path: 'recipes/:id',
    component: RecipeViewComponent,
  },
  {
    path: 'favorites',
    component: RecipeUserListComponent,
  },
  // default 
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
