import { Component, input, output } from '@angular/core';
import { Recurso } from '../../data/recursos';

@Component({
  selector: 'app-recurso-card',
  imports: [],
  templateUrl: './recurso-card.html',
  styleUrl: './recurso-card.css',
})
export class RecursoCard {
  recurso = input.required<Recurso>();
  aberto = input(false);

  // Avisa o componente pai que o card foi clicado
  alternar = output<Recurso>();
}
