import { Column, Entity, PrimaryGeneratedColumn, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    password: string;
}
