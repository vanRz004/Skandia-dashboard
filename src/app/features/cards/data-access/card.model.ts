export interface Card {
  nameProduct: string;
  numberProduct: string;
  balanceProduct: string;
  detaildProduct: string;
}
export interface CardsResponse {
  listCard: Card[];
}