import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { GoalCardComponent } from '../../components/goal-card/goal-card';
import { CardsListComponent } from '../../components/cards/cards-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ Navbar, GoalCardComponent, CardsListComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {}
