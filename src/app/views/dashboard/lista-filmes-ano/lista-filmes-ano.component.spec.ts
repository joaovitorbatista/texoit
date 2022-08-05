import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFilmesAnoComponent } from './lista-filmes-ano.component';

describe('ListaFilmesAnoComponent', () => {
  let component: ListaFilmesAnoComponent;
  let fixture: ComponentFixture<ListaFilmesAnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFilmesAnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFilmesAnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
