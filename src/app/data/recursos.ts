export type Categoria = 'Componentes' | 'Reatividade' | 'Ferramentas';

export interface Recurso {
  id: number;
  titulo: string;
  categoria: Categoria;
  resumo: string;
  detalhe: string;
  exemplo: string;
}

export const CATEGORIAS: Categoria[] = ['Componentes', 'Reatividade', 'Ferramentas'];

export const RECURSOS: Recurso[] = [
  {
    id: 1,
    titulo: 'Componentes Standalone',
    categoria: 'Componentes',
    resumo: 'Cada parte da tela é um componente independente.',
    detalhe:
      'Um componente junta template (HTML), estilos (CSS) e lógica (TypeScript). No modo standalone ele declara as próprias dependências em "imports", sem precisar de NgModule.',
    exemplo: "@Component({ selector: 'app-hero', templateUrl: './hero.html' })",
  },
  {
    id: 2,
    titulo: 'Inputs e Outputs',
    categoria: 'Componentes',
    resumo: 'Comunicação entre componente pai e filho.',
    detalhe:
      'input() recebe dados do componente pai e output() envia eventos para ele. Nesta página, o Hero recebe o título por input e cada card avisa o pai quando é aberto.',
    exemplo: 'titulo = input.required<string>();',
  },
  {
    id: 3,
    titulo: 'Signals',
    categoria: 'Reatividade',
    resumo: 'Valores reativos que atualizam a tela sozinhos.',
    detalhe:
      'Um signal guarda um valor e avisa o Angular quando ele muda. computed() cria valores derivados, como a lista filtrada desta página.',
    exemplo: 'filtro = signal<Categoria | null>(null);',
  },
  {
    id: 4,
    titulo: 'Controle de fluxo',
    categoria: 'Reatividade',
    resumo: '@if e @for direto no template.',
    detalhe:
      'A sintaxe @if mostra ou esconde partes da tela e @for repete um bloco para cada item de uma lista, com "track" para o Angular saber qual item mudou.',
    exemplo: '@for (recurso of filtrados(); track recurso.id) { ... }',
  },
  {
    id: 5,
    titulo: 'Data Binding',
    categoria: 'Reatividade',
    resumo: 'Liga os dados do TypeScript ao HTML.',
    detalhe:
      'Interpolação {{ }} mostra valores, [propriedade] passa dados para o elemento e (evento) reage a cliques e digitação.',
    exemplo: '<button (click)="selecionar(cat)">{{ cat }}</button>',
  },
  {
    id: 6,
    titulo: 'Angular CLI',
    categoria: 'Ferramentas',
    resumo: 'Cria, executa e compila o projeto pelo terminal.',
    detalhe:
      'Comandos como ng new, ng generate component, ng serve e ng build padronizam a estrutura do projeto e geram os arquivos de cada componente.',
    exemplo: 'ng generate component components/hero',
  },
  {
    id: 7,
    titulo: 'TypeScript',
    categoria: 'Ferramentas',
    resumo: 'Tipagem estática em todo o projeto.',
    detalhe:
      'O Angular é escrito em TypeScript. As interfaces, como Recurso nesta página, avisam erros ainda no editor, antes de o código rodar.',
    exemplo: 'interface Recurso { id: number; titulo: string; }',
  },
  {
    id: 8,
    titulo: 'Router',
    categoria: 'Ferramentas',
    resumo: 'Navegação entre páginas sem recarregar.',
    detalhe:
      'O roteador mapeia URLs para componentes e troca o conteúdo dentro de <router-outlet>, criando uma Single Page Application.',
    exemplo: "{ path: 'sobre', component: Sobre }",
  },
];
