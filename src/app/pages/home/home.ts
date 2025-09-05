import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { GoalCardComponent } from '../../components/goal-card/goal-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ Navbar, GoalCardComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {}
