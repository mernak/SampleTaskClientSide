import { User } from './user';
import { Package } from './package';
import { Role } from './role';
import { Trainer } from './trainer';

export class Member implements User {
    id: number;
    password: string;
    role: Role;
    username: string;
    firstName: string;
    lastName: string;
    Age: number;
    token: string;
    package: Package;
    trainer: Trainer;
}