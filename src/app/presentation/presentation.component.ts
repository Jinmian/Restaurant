
import { Component, OnInit } from '@angular/core';
import studentsData from '../../assets/data/students.json';
import menuData from '../../assets/data/Menutest.json';

interface Student {
  id: Number;
  name: String;
  email: String;
  gender: String;
}

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
  students: Student[] = studentsData;
  menus: Menu[] = menuData;

  constructor() { }

  ngOnInit(): void {
  }

}
