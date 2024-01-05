import { create } from 'zustand';
import { CounterClickAdProps } from './types';

export const useCounterClickAd = create<CounterClickAdProps>((set) => ({
  clicks: 0,
  setClicks: data => {
    set({ clicks: data });
  }
}));
