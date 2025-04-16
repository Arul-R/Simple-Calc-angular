import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleCalcComponent  } from './simple-calc/simple-calc.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SimpleCalcComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'simple-calc';
}