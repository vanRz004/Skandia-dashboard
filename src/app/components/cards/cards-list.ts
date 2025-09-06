import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { CardsService } from '../../data-access/cards.service';
import { Card } from '../../data-access/card.model';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cards-list.html',
  styleUrls: ['./cards-list.scss']
})
export class CardsListComponent implements OnInit {
  private cardsService = inject(CardsService);

  cards: Card[] = [];
  loading = true;
  error: string | null = null;

  accentColors = ['#95DBB7', '#A5D7E1', '#63AABC', '#FF9460'];
  accent(i: number) { return this.accentColors[i % this.accentColors.length]; }

  private ICONS_BY_PRODUCT: Record<string, string> = {
    'FIC Efectivo': 'logo/ico_smile.svg',
    'Seguro de vida CREA': 'logo/ico_heart.svg',
    'FICS': 'logo/ico_trophy.svg',
    'BOLT': 'logo/ico_piggy.svg'
  };

  private ICONS_CYCLE = [
    'logo/Happy.svg',
    'logo/Trofeo.svg',
    'logo/Handheart.svg',
    'logo/Happy.svg'
  ];

  getIcon(i: number): string {
    return this.ICONS_CYCLE[i % this.ICONS_CYCLE.length];
  }

  promoOpen = false;

  @ViewChild('viewport', { static: false }) viewport?: ElementRef<HTMLDivElement>;
  @ViewChild('track', { static: false }) track?: ElementRef<HTMLDivElement>;

  ngOnInit() {
    this.cardsService.getCards().subscribe({
      next: (data) => { this.cards = data; this.loading = false; },
      error: () => { this.error = 'Error al cargar tarjetas'; this.loading = false; }
    });
  }

  scroll(dir: number) {
    const view = this.viewport?.nativeElement;
    if (!view) return;
    const step = Math.round(view.clientWidth * 0.9);
    view.scrollBy({ left: dir * step, behavior: 'smooth' });
  }

  togglePromo() {
    this.promoOpen = !this.promoOpen;
  }
}
