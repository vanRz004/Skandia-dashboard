import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-goal-card',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './goal-card.html',
  styleUrls: ['./goal-card.scss']
})
export class GoalCardComponent {
  @Input() title = 'Conocer mi sobrino';
  @Input() category = 'Bienestar';
  @Input() date = 'Diciembre/2022';
  @Input() goal = 6000000;
  @Input() actual = 0;
}
