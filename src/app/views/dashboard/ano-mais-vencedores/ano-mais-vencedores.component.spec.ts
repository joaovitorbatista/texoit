import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnoMaisVencedoresComponent } from './ano-mais-vencedores.component';

describe('AnoMaisVencedoresComponent', () => {
  let component: AnoMaisVencedoresComponent;
  let fixture: ComponentFixture<AnoMaisVencedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnoMaisVencedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnoMaisVencedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
