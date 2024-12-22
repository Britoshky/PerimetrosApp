import { Component } from '@angular/core';
import { Circulo } from '../figuras';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css'],
  standalone: true,
})
export class CircleComponent {
  radio!: number;
  resultado!: number;

  calcular() {
    const circulo = new Circulo(this.radio);
    this.resultado = circulo.calcularPerimetro();
  }
}
