import { Component, HostBinding, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-recipe-landing',
  templateUrl: './recipe-landing.component.html',
  styleUrls: ['./recipe-landing.component.css'],
})
export class RecipeLandingComponent implements OnInit {
  isMenuEnabled = false;
  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.isMenuEnabled.subscribe(() => {
      this.isMenuEnabled = !this.isMenuEnabled;
    });
  }
}
