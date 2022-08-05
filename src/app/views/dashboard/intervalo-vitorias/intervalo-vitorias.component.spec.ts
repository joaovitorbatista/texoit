import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervaloVitoriasComponent } from './intervalo-vitorias.component';

describe('IntervaloVitoriasComponent', () => {
  let component: IntervaloVitoriasComponent;
  let fixture: ComponentFixture<IntervaloVitoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervaloVitoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervaloVitoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
