import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioMaisVitoriasComponent } from './estudio-mais-vitorias.component';

describe('EstudioMaisVitoriasComponent', () => {
  let component: EstudioMaisVitoriasComponent;
  let fixture: ComponentFixture<EstudioMaisVitoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioMaisVitoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudioMaisVitoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
