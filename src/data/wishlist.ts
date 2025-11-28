import { WishlistData } from '@/types/wishlist';

export const wishlistData: WishlistData = {
  amazon: [
    // --- Previously Added Items ---
    {
      name: 'Magic: The Gathering – Station Basic Cards Box',
      url: 'https://www.amazon.com/dp/B0DSR9CNF6',
      price: '$22.94',
      priority: 'medium',
      notes: '',
    },
    {
      name: 'MTG Undergrowth Card Sleeves (Yin-Yang Aesthetic)',
      url: 'https://www.amazon.com/dp/B0FBWJ7GF7?',
      price: '$12.79',
      priority: 'medium',
      notes: 'Cool potential sleeves for my Water-themed deck',
    },
    {
      name: 'STTRBOX Commander Deck Box',
      url: 'https://www.amazon.com/dp/B0FNN6DMM5?th=1',
      price: '$29.99',
      priority: 'medium',
      notes: 'Primary deck box for future deck creations.  Long term storage that looks nice but I wont grow out of likely in years.',
    },

    // --- Newly Added Items ---
    {
      name: 'SIXPOINTS 60-Piece MTG Keyword Counters Set',
      url: 'https://www.amazon.com/dp/B0DY19MJXM',
      price: '$10.99',
      priority: 'medium',
      notes: 'Status effect labels for helping track various in-game effects',
    },
    {
      name: '48-Piece MTG Counter Dice Set (Marble Look)',
      url: 'https://www.amazon.com/dp/B0DY17JYG5',
      price: '$10.99',
      priority: 'medium',
      notes: 'Counter dice to tracking changes to various stats like power/toughness',
    },
    {
      name: 'FIGURESLAB 4-Pack MTG Life Counter (Twin Digits, Metal Box)',
      url: 'https://www.amazon.com/dp/B0FCS2GWNV',
      price: '$13.99',
      priority: 'medium',
      notes: 'Tools for keeping track of life totals during games',
    },
    ],
  cardKingdom: [
    {
      name: 'Magic Card Example 1',
      url: 'https://www.cardkingdom.com/example1',
      price: '$15.00',
      priority: 'high',
      notes: 'Need for my deck'
    },
    {
      name: 'Magic Card Example 2',
      url: 'https://www.cardkingdom.com/example2',
      price: '$8.50',
      priority: 'low',
    },
  ],
};
