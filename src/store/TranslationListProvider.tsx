"use client";

import { createContext, useContext } from "react";
import { create } from "zustand";

interface TranslationState {
  translation: string[];
  addTranslationList: (newList: string[]) => void;
  removeAllTranslationList: () => void;
}

const useTranslation = create<TranslationState>((set) => ({
  translation: [],
  addTranslationList: (newList: string[]) =>
    set((state) => ({
      translation: [...state.translation, ...newList],
    })),
  removeAllTranslationList: () => set({ translation: [] }),
}));

const StoreContext = createContext<TranslationState | null>(null);

export const TranslationStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const store = useTranslation();
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error(
      "useStoreContext must be used within a TranslationStoreProvider"
    );
  }
  return context;
};
