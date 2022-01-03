import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity('client', {database: 'mongodb'})
export class Client {

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    name: string;
}
