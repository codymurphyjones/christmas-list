'use client';

import { useState } from 'react';
import { wishlistData } from '@/data/wishlist';
import { WishlistItem } from '@/types/wishlist';

const websiteNames: Record<string, string> = {
  amazon: 'Amazon',
  cardKingdom: 'Card Kingdom',
};

const websiteColors: Record<string, string> = {
  amazon: 'bg-amber-500',
  cardKingdom: 'bg-blue-500',
};

const priorityColors: Record<string, string> = {
  high: 'text-red-600 font-semibold',
  medium: 'text-yellow-600 font-medium',
  low: 'text-green-600',
};

const priorityOrder = { high: 1, medium: 2, low: 3 };

function parsePrice(priceStr: string | undefined): number {
  if (!priceStr) return 0;
  const numStr = priceStr.replace(/[^0-9.]/g, '');
  return parseFloat(numStr) || 0;
}

export default function Home() {
  const [sortBy, setSortBy] = useState<'none' | 'priority' | 'price-asc' | 'price-desc'>('none');

  const sortItems = (items: WishlistItem[]) => {
    const itemsCopy = [...items];
    
    switch (sortBy) {
      case 'priority':
        return itemsCopy.sort((a, b) => {
          const priorityA = a.priority ? priorityOrder[a.priority] : 999;
          const priorityB = b.priority ? priorityOrder[b.priority] : 999;
          return priorityA - priorityB;
        });
      case 'price-asc':
        return itemsCopy.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      case 'price-desc':
        return itemsCopy.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      default:
        return itemsCopy;
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50 dark:from-red-950 dark:via-zinc-900 dark:to-green-950">
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-red-600 dark:text-red-400 mb-4">
            Cody&apos;s Christmas Wishlist
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Here are the gifts I&apos;d love this holiday season!
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="inline-flex gap-2 bg-white dark:bg-zinc-800 p-2 rounded-lg shadow-md">
            <button
              onClick={() => setSortBy('none')}
              className={`px-4 py-2 rounded font-medium transition-colors ${
                sortBy === 'none'
                  ? 'bg-red-600 text-white'
                  : 'bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600'
              }`}
            >
              Default
            </button>
            <button
              onClick={() => setSortBy('priority')}
              className={`px-4 py-2 rounded font-medium transition-colors ${
                sortBy === 'priority'
                  ? 'bg-red-600 text-white'
                  : 'bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600'
              }`}
            >
              Priority
            </button>
            <button
              onClick={() => setSortBy('price-asc')}
              className={`px-4 py-2 rounded font-medium transition-colors ${
                sortBy === 'price-asc'
                  ? 'bg-red-600 text-white'
                  : 'bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600'
              }`}
            >
              Price: Low to High
            </button>
            <button
              onClick={() => setSortBy('price-desc')}
              className={`px-4 py-2 rounded font-medium transition-colors ${
                sortBy === 'price-desc'
                  ? 'bg-red-600 text-white'
                  : 'bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600'
              }`}
            >
              Price: High to Low
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {Object.entries(wishlistData).map(([website, items]) => (
            <section 
              key={website}
              className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className={`${websiteColors[website]} p-6`}>
                <h2 className="text-3xl font-bold text-white">
                  {websiteNames[website]}
                </h2>
              </div>
              
              <div className="p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {sortItems(items).map((item: WishlistItem, index: number) => (
                    <div 
                      key={index}
                      className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 flex-1">
                          {item.name}
                        </h3>
                        {item.priority && (
                          <span className={`text-sm ml-2 ${priorityColors[item.priority]}`}>
                            {item.priority.toUpperCase()}
                          </span>
                        )}
                      </div>
                      
                      {item.price && (
                        <p className="text-lg font-bold text-green-600 dark:text-green-400 mb-2">
                          {item.price}
                        </p>
                      )}
                      
                      {item.notes && (
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 italic">
                          {item.notes}
                        </p>
                      )}
                      
                      <a 
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded transition-colors"
                      >
                        View Item
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
