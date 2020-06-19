import { User } from './user';
import { Role } from './role';

export class Trainer implements User {
    id: number;
    password: string;
    role: Role;
    username: string;
    firstName: string;
    lastName: string;
    token: string;
    salary: number;
}