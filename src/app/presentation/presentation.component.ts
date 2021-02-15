
import { Component, OnInit } from '@angular/core';
import menuMidiData from '../../assets/data/Menu_midi.json';
import menuBrochetteData from '../../assets/data/Menu_brochette.json';

interface Menu_midi {
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
  menu_midi: Menu_midi[] = menuMidiData;
  menu_brochette: Menu_midi[] = menuBrochetteData;

  constructor() { }

  ngOnInit(): void {
  }

}
