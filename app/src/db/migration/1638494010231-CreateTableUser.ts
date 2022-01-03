import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableUser1638494010231 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        /*await queryRunner.query(
            `CREATE TABLE dbo.[user] (
                [id] INT PRIMARY KEY,
                [name] VARCHAR(100) NOT NULL,
                [username] VARCHAR(100) NOT NULL,
                [password] VARCHAR(255) NOT NULL 
            )`
        );*/
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    {
                        name: 'id',
                        type: 'INT',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'name',
                        type: 'VARCHAR(100)',
                        isNullable: false
                    },
                    {
                        name: 'username',
                        type: 'VARCHAR(100)',
                        isNullable: false
                    },
                    {
                        name: 'password',
                        type: 'VARCHAR(255)',
                        isNullable: false
                    }
                ]
            }),
            false
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user', true);
    }

}
