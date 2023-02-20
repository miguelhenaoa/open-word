export interface User {
  dni: number;
  name: string;
  username: string;
  email: string;
  role: string;
  address: string;
  phone: string;
  password: string;
  lastActivity: string;
}

export type Users = User[];
