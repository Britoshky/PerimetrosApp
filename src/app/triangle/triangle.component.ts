import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-triangle',
  standalone: true,
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss'],
  imports: [CommonModule, FormsModule, IonicModule], // Importar CommonModule
})
export class TriangleComponent {
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  resultado: number | null = null;

  calcular() {
    this.resultado = this.ladoA + this.ladoB + this.ladoC;
  }
}
