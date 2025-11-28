export type Website = 'amazon' | 'cardKingdom';

export interface WishlistItem {
  name: string;
  url: string;
  price?: string;
  priority?: 'high' | 'medium' | 'low';
  notes?: string;
}

export type WishlistData = {
  [key in Website]: WishlistItem[];
};
