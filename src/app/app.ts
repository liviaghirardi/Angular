import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <header>
        <h1>{{ title }}</h1>
        <p>Projeto Desenvolvido para a Atividade Prática de Frameworks Front-end (SENAI)</p>
      </header>

      <main class="content">
        <section class="card">
          <h2>Sobre o Projeto</h2>
          <p>Esta aplicação foi desenvolvida utilizando <strong>Angular</strong>, atendendo aos requisitos de componentização, responsividade e versionamento com Git.</p>
        </section>

        <section class="card">
        <h2>Recursos Utilizados</h2>
        <ul>
          <li>Arquitetura baseada em Componentes Standalone</li>
          <li>Data Binding e Programação Reativa</li>
          <li>TypeScript e Angular CLI</li>
          <li>Responsividade com CSS Flexbox</li> <!-- Novo item adicionado -->
        </ul>
      </section>
      </main>

      <footer>
      <p>&copy; 2026 - Aluna: Lívia Ghirardi | Projeto Concluído com Sucesso</p>
    </footer>
    </div>
  `,
  styles: [`
    .container {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 40px auto;
      padding: 20px;
      color: #333;
    }
    header {
      text-align: center;
      margin-bottom: 30px;
      background-color: #0056b3;
      color: white;
      padding: 20px;
      border-radius: 8px;
    }
    .card {
      background: #f9f9f9;
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    footer {
      text-align: center;
      margin-top: 40px;
      color: #666;
      font-size: 0.9em;
    }
  `]
})
export class AppComponent {
  title = 'Landing Page Interativa - Angular'; // Alterado aqui
}