export interface UseUserProps {
    user: UserModel
    users: UserModel[];
    setUser: (data: any) => void;
    setUsers: (data: any) => void;
    uid: string;
    setUid: (data: any) => void;
}

export interface ProviderData {
    displayName: string | null;
    email: string;
    phoneNumber: string | null;
    photoURL: string | null;
    providerId: string;
    uid: string;
}

export interface StsTokenManager {
    accessToken: string;
    expirationTime: number;
    refreshToken: string;
}

export interface UserModel {
    email: string;
    displayName: string;
    photoURL: string;
    phoneNumber: string;
    uid: string;
    services: string[];
    country: string;
    description: string;
    isProfessional: boolean;
    id: string;

}
