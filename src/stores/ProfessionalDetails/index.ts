import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { UseProfessionalProps } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useProfessional = create<UseProfessionalProps>()(
    persist((set, get) => ({
        professional: {
            email: '',
            uid: '',
            displayName: '',
            photoURL: '',
            phoneNumber: '',
            services: [],
            country: '',
            description: '',
            isProfessional: false,
            id: '',
          
        },
        setProfessional: (data) => {
            set({ professional: data })
        }
    }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => AsyncStorage),
            partialize: ({ professional }: UseProfessionalProps) => ({ professional }),
        })
)