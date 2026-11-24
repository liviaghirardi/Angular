import { Component, computed, signal } from '@angular/core';
import { CATEGORIAS, Categoria, RECURSOS, Recurso } from '../../data/recursos';
import { RecursoCard } from '../recurso-card/recurso-card';

@Component({
  selector: 'app-features',
  imports: [RecursoCard],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {
  categorias = CATEGORIAS;

  // Estado da tela guardado em signals
  filtro = signal<Categoria | null>(null);
  aberto = signal<number | null>(null);

  // Lista derivada: muda sozinha quando o filtro muda
  filtrados = computed(() => {
    const categoria = this.filtro();
    return categoria ? RECURSOS.filter((r) => r.categoria === categoria) : RECURSOS;
  });

  selecionar(categoria: Categoria | null) {
    this.filtro.set(categoria);
    this.aberto.set(null);
  }

  alternar(recurso: Recurso) {
    this.aberto.update((atual) => (atual === recurso.id ? null : recurso.id));
  }
}
