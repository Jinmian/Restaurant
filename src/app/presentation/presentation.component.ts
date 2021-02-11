
import { Component, OnInit } from '@angular/core';
import menuData from '../../assets/data/Menutest.json';

interface Menu {
  id: Number;
  name: String;
  description: String;
  price: String;
}

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  menus: Menu[] = menuData;

  constructor() { }

  ngOnInit(): void {
  }

}
