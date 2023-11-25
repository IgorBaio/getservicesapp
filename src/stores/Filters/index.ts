import { create } from 'zustand';
import { UseFiltersProps } from './types';

export const useFilters = create<UseFiltersProps>((set) => ({
  nationality: true,
  service: '',
  setService: data => {
    set({ service: data });
  },
  setNationality: data => {
    set({ nationality: data });
  }
}));
