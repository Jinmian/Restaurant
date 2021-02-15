import { Component, OnInit } from '@angular/core';
import menuMidiData from '../../assets/data/Menu_midi.json';
import menuBrochetteData from '../../assets/data/Menu_brochette.json';

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
  menu_midi: Menu[] = menuMidiData;
  menu_brochette: Menu[] = menuBrochetteData;
  constructor() { }

  ngOnInit(): void {
  }

}
