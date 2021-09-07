import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuService } from '../recipes/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private menuService: MenuService) {}

  ngOnInit(): void {}

  onClick() {
    this.menuService.isMenuEnabled.next(true);
  }
}
