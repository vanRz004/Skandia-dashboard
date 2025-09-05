import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card, CardsResponse } from './card.model';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CardsService {
  private http = inject(HttpClient);
  private base = 'https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards';

  getCards(): Observable<Card[]> {
    return this.http.get<CardsResponse>(`${this.base}`)
      .pipe(
        map(res => res.listCard)
      );
  }
}
