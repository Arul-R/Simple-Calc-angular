import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-calc',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './simple-calc.component.html',
  styleUrl: './simple-calc.component.css'
})
export class SimpleCalcComponent {
  a = signal<number | null>(null);
  b = signal<number | null>(null);
  fin = signal<number | null>(null);

  calculate(operation: string) {
    const numA = this.a();
    const numB = this.b();

    if (numA === null || numB === null) return;

    switch (operation) {
      case 'add':
        this.fin.set(numA + numB);
        break;
      case 'sub':
        this.fin.set(numA - numB);
        break;
      case 'mul':
        this.fin.set(numA * numB);
        break;
      case 'div':
        this.fin.set(numB !== 0 ? numA / numB : null);
        break;
    }
  }
}
