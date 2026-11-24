import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  // Dados recebidos do componente pai (App)
  titulo = input.required<string>();
  subtitulo = input('');
}
