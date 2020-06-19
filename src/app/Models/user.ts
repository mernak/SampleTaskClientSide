import { Role } from './role';

export interface User {
    username: string;
    password: string;
    role: Role;
    token?: string;
}
