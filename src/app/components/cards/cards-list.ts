import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsService } from '../../data-access/cards.service';
import { Card } from '../../data-access/card.model';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule],         
  templateUrl: './cards-list.html',
  styleUrls: ['./cards-list.scss']                  
})
export class CardsListComponent implements OnInit {
  private cardsService = inject(CardsService);

  cards: Card[] = [];
  loading = true;
  error: string | null = null;

  ngOnInit() {
    this.cardsService.getCards().subscribe({
      next: (data) => { this.cards = data; this.loading = false; },
      error: () => { this.error = 'Error al cargar tarjetas '; this.loading = false; }
    });
  }
}
