import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-circle',
  standalone: true,
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
  imports: [CommonModule, FormsModule, IonicModule],
})
export class CircleComponent {
  radio: number = 0; // Valor del radio ingresado por el usuario
  resultado: number | null = null; // Resultado del cálculo

  calcular() {
    // Cálculo del perímetro del círculo
    this.resultado = 2 * Math.PI * this.radio;
  }
}
