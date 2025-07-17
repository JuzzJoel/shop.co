
import React from 'react';
import type { Product } from '@/lib/types/types'; // Adjust path as needed

interface SearchBarDisplayProps {
  searchItem: (search: string) => void;
  recentSearches: string[];
  searchResults: Product[];
}

const SearchBarDisplay = ({ searchItem, recentSearches, searchResults }: SearchBarDisplayProps) => {
  return (
    <section className="mt-4 w-full bg-white rounded-[20px] shadow-md p-4">
      <h2 className="text-lg font-bold mb-2">Recent Searches</h2>
      <ul>
        {recentSearches.map((search, index) => (
          <li key={index} className="py-2 border-b border-gray-200">
            <button className="text-sm text-gray-600" onClick={() => searchItem(search)}>
              {search}
            </button>
          </li>
        ))}
      </ul>
      {searchResults.length > 0 && (
        <p className="text-sm text-gray-600 mt-2">
          {searchResults.length} results found
        </p>
      )}
    </section>
  );
};

export default SearchBarDisplay;
