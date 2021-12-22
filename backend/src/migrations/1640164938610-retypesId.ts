import {MigrationInterface, QueryRunner} from "typeorm";

export class retypesId1640164938610 implements MigrationInterface {
    name = 'retypesId1640164938610'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isAdmin" boolean NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "profiles" ("id" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "dateOfBirth" character varying NOT NULL, "aboutMe" character varying NOT NULL, "mainPhoto" character varying NOT NULL, "userId" character varying NOT NULL, CONSTRAINT "PK_8e520eb4da7dc01d0e190447c8e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "profiles"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
