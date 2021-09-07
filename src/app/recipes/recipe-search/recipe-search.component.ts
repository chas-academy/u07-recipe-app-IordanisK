import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css'],
})
export class RecipeSearchComponent implements OnInit {
  inputValue = new FormControl('');
  constructor(private router: Router) { }

  onClick(event) {
    // kommer gå till vyn som queryParams specifierar
    this.router.navigate([], {
      queryParams: { search: this.inputValue.value },
    });
  }

  ngOnInit(): void { }
}
