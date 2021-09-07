import { Component, Input, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css'],
})
export class InfoBoxComponent extends MatCard implements OnInit {
  @Input() title = '';
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
