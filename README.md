# 🎄 Cody's Christmas Wishlist

A Next.js TypeScript application for displaying and managing Christmas wishlist items organized by website.

## Features

- 🎅 Beautiful, festive UI with holiday theme
- 🛍️ Organized by shopping website (Amazon, Card Kingdom)
- 📝 Each item includes name, URL, price, priority, and notes
- 🎨 Responsive design with Tailwind CSS
- 🌙 Dark mode support

## Project Structure

- `src/types/wishlist.ts` - TypeScript type definitions for wishlist items
- `src/data/wishlist.ts` - Wishlist data organized by website
- `src/app/page.tsx` - Main page component displaying the wishlist

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the wishlist.

## Adding Items to Your Wishlist

Edit `src/data/wishlist.ts` to add, remove, or modify wishlist items:

```typescript
export const wishlistData: WishlistData = {
  amazon: [
    {
      name: 'Item Name',
      url: 'https://www.amazon.com/...',
      price: '$29.99',
      priority: 'high', // 'high', 'medium', or 'low'
      notes: 'Optional notes about why you want this'
    },
  ],
  cardKingdom: [
    // Add Card Kingdom items here
  ],
};
```

## Adding New Websites

1. Update the `Website` type in `src/types/wishlist.ts`
2. Add the website key to `wishlistData` in `src/data/wishlist.ts`
3. Add display name and color to the mapping objects in `src/app/page.tsx`

## Built With

- [Next.js 16](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- React 19
