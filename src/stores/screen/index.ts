import {create} from 'zustand';
import {UseScreenProps} from './types';

export const useScreen = create<UseScreenProps>((set) => ({
  screen: 0,
  setScreen: data => {
    set({screen: data});
  },
}));
