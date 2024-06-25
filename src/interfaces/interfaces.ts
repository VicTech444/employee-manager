export interface jwtResponse {
    email: string;
    exp: number;
    iat: number;
    role: number;
    userName: string;
}

export interface notifyProps {
    type: string;
    message: string;
  }