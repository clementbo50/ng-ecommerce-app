export class AuthResponse {
    accessToken!: string;
    user!: {
      id: number;
      email: string;
    };
  }
  