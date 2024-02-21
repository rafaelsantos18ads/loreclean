import { Component } from '@angular/core';
import { ListaCabecalhoComponent } from '../lista-cabecalho/lista-cabecalho.component';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [ListaCabecalhoComponent],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {

}
