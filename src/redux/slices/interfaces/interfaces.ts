export interface User {
  id: number;
  firebaseUid: string;
  email: string;
  phoneNumber: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  files: File[];
}

export interface LoginCredentials {
  email: string;
  name?: string;
  idToken: string;
  password?: string;
  role?: string;
  phoneNumber?: string;
}

export interface LoginResponse {
  message: string;
  user: User;
}
