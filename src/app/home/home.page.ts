import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CircleComponent } from '../circle/circle.component';
import { TriangleComponent } from '../triangle/triangle.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule, CircleComponent, TriangleComponent],
})
export class HomePage {
  figuraSeleccionada: string | null = null;
}
