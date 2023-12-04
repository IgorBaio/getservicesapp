import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { UseUserProps } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useUser = create<UseUserProps>()(
    persist((set, get) => ({
        user: {
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
        users: [],
        setUser: (data) => {
            set({ user: data })
        },
        setUsers: (data) => {
            set({ users: data })
        },
    }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => AsyncStorage),
            partialize: ({ user }: UseUserProps) => ({ user }),
        })
)