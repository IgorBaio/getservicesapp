import { create } from 'zustand';
import { UseLoadingProps } from './types';

export const useLoading = create<UseLoadingProps>((set) => ({
  isLoading: true,
  setIsLoading: data => {
    set({ isLoading: data });
  }
}));
