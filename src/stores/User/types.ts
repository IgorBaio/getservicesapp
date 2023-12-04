export interface UseUserProps {
    user: UserModel
    users: UserModel[];
    setUser: (data: any) => void;
    setUsers: (data: any) => void;
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
    // apiKey: string;
    // appName: string;
    // createdAt: string;
    email: string;
    displayName: string;
    photoURL: string;
    phoneNumber: string;
    // emailVerified: boolean;
    // isAnonymous: boolean;
    // lastLoginAt: string;
    // providerData: ProviderData[];
    // stsTokenManager: StsTokenManager;
    uid: string;
    services: string[];
    country: string;
    description: string;
    isProfessional: boolean;
    id: string;

}
