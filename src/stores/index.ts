import {create} from 'zustand';
import {UseCurrentRouteProps} from './types';

export const useCurrentRoute = create<UseCurrentRouteProps>(set => ({
  routeName: '',
  setRouteName: data => {
    set({routeName: data});
  },
}));
