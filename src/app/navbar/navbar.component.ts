import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  afficheBar() {
    console.log("alert");
    let x = (<HTMLElement>document.getElementById("myTopnav"))
    /*let x = document.getElementById("myTopnav") as HTMLElement;*/
    console.log(x.className);

    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

}
