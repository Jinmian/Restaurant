import { Component, OnInit } from '@angular/core';
import menuData from '../../assets/data/Menutest.json';

interface Menu {
  id: Number;
  name: String;
  description: String;
  price: String;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: Menu[] = menuData;
  constructor() { }

  ngOnInit(): void {
  }

}
