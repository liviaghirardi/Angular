import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Features } from './features';
import { RECURSOS } from '../../data/recursos';

describe('Features', () => {
  let component: Features;
  let fixture: ComponentFixture<Features>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Features],
    }).compileComponents();

    fixture = TestBed.createComponent(Features);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should list all resources by default', () => {
    expect(component.filtrados().length).toBe(RECURSOS.length);
  });

  it('should filter resources by category', () => {
    component.selecionar('Ferramentas');
    expect(component.filtrados().every((r) => r.categoria === 'Ferramentas')).toBe(true);
  });
});
