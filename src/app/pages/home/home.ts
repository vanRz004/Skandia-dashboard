import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { GoalCardComponent } from '../../components/goal-card/goal-card';
import { CardsListComponent } from '../../components/cards/cards-list';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ Navbar, GoalCardComponent, CardsListComponent, Footer],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {

  inversionPunto = 6000000;
  inversionNombre = 'Conocer mi sobrino';

}
