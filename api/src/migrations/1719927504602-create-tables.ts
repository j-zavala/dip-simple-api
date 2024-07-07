import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1719927504602 implements MigrationInterface {
  name = 'CreateTables1719927504602';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "todo" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "done" boolean NOT NULL, "createdAt" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "todo"`);
  }
}
