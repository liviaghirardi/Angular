import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  imports: [],
  templateUrl: './cta.html',
  styleUrl: './cta.css',
})
export class Cta {
  comandos = ['npm install -g @angular/cli', 'ng new meu-app-angular', 'cd meu-app-angular', 'ng serve'];
}
