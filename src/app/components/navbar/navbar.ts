import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  links = [
    { texto: 'Recursos', ancora: '#recursos' },
    { texto: 'Começar', ancora: '#comecar' },
  ];
}
