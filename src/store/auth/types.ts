import { User } from '@/models/User';

export interface AuthState {
	token: string;
	decodedToken: DToken;
	authUser: User;
}

interface DToken {
	unique_name: string;
	role: string;
	nbf: number;
	exp: number;
	iat: number;
}
