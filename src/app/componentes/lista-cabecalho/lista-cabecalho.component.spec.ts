import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCabecalhoComponent } from './lista-cabecalho.component';

describe('ListaCabecalhoComponent', () => {
  let component: ListaCabecalhoComponent;
  let fixture: ComponentFixture<ListaCabecalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCabecalhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaCabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
