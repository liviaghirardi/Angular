import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Features } from './components/features/features';
import { Cta } from './components/cta/cta';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Features, Cta, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titulo = 'Recursos do Angular';
  subtitulo =
    'Um framework completo do Google para criar aplicações web com componentes, TypeScript e reatividade com signals. Escolha uma categoria e abra um recurso para ver como ele funciona.';
}
