import { useState, useCallback } from 'react';

export const useFAQ = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = useCallback((itemId: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        // Close all other items first
        newSet.clear();
        newSet.add(itemId);
      }
      return newSet;
    });
  }, []);

  const isOpen = useCallback((itemId: string) => {
    return openItems.has(itemId);
  }, [openItems]);

  return {
    toggleItem,
    isOpen
  };
};
