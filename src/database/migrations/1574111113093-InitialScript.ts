import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialScript1574111113093 implements MigrationInterface {
    name = 'InitialScript1574111113093'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "part_types" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(36) NOT NULL, CONSTRAINT "UQ_c1202e8a7c43ec344c989a4d626" UNIQUE ("name"), CONSTRAINT "PK_7ffd345eaf4cae28b2823dd5f07" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "parts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "part_id" character varying(36) NOT NULL, "name" character varying(36) NOT NULL, "description" character varying(255), "material" text, "system" character varying, "custom_fields" json NOT NULL, "type_id" uuid, CONSTRAINT "UQ_03e620d65a1dc1584cb289f3d0b" UNIQUE ("part_id"), CONSTRAINT "PK_daa5595bb8933f49ac00c9ebc79" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "versions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "version_number" integer NOT NULL, "created_at" TIMESTAMP NOT NULL, "file_urn" character varying NOT NULL, "preview_urn" character varying, "partId" uuid, "lodId" uuid, CONSTRAINT "PK_921e9a820c96cc2cd7d4b3a107b" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "lod" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(36) NOT NULL, "order" integer NOT NULL, "is_default" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_58e5c4753c4510a27f6755cbe78" UNIQUE ("order"), CONSTRAINT "PK_96a79979d45d7be81b06a8a2d0f" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "part_sets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(36) NOT NULL, CONSTRAINT "UQ_085f354979a7ab32709c97d678e" UNIQUE ("name"), CONSTRAINT "PK_649014eede0efa9ccb770bed0f8" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "part_sets_parts_parts" ("partSetsId" uuid NOT NULL, "partsId" uuid NOT NULL, CONSTRAINT "PK_aaa25769649a8d515d6d517c575" PRIMARY KEY ("partSetsId", "partsId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_adba7a7462c681fe7e9c652378" ON "part_sets_parts_parts" ("partSetsId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_fa9f812577732ad88e754f21e5" ON "part_sets_parts_parts" ("partsId") `, undefined);
        await queryRunner.query(`ALTER TABLE "parts" ADD CONSTRAINT "FK_1edfed4714bd5909764eb51d6ef" FOREIGN KEY ("type_id") REFERENCES "part_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "versions" ADD CONSTRAINT "FK_6914542f8994789ca5512d053ec" FOREIGN KEY ("partId") REFERENCES "parts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "versions" ADD CONSTRAINT "FK_e18856d8ee3bfe433e5e00e82ed" FOREIGN KEY ("lodId") REFERENCES "lod"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "part_sets_parts_parts" ADD CONSTRAINT "FK_adba7a7462c681fe7e9c6523788" FOREIGN KEY ("partSetsId") REFERENCES "part_sets"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "part_sets_parts_parts" ADD CONSTRAINT "FK_fa9f812577732ad88e754f21e5f" FOREIGN KEY ("partsId") REFERENCES "parts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "part_sets_parts_parts" DROP CONSTRAINT "FK_fa9f812577732ad88e754f21e5f"`, undefined);
        await queryRunner.query(`ALTER TABLE "part_sets_parts_parts" DROP CONSTRAINT "FK_adba7a7462c681fe7e9c6523788"`, undefined);
        await queryRunner.query(`ALTER TABLE "versions" DROP CONSTRAINT "FK_e18856d8ee3bfe433e5e00e82ed"`, undefined);
        await queryRunner.query(`ALTER TABLE "versions" DROP CONSTRAINT "FK_6914542f8994789ca5512d053ec"`, undefined);
        await queryRunner.query(`ALTER TABLE "parts" DROP CONSTRAINT "FK_1edfed4714bd5909764eb51d6ef"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_fa9f812577732ad88e754f21e5"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_adba7a7462c681fe7e9c652378"`, undefined);
        await queryRunner.query(`DROP TABLE "part_sets_parts_parts"`, undefined);
        await queryRunner.query(`DROP TABLE "part_sets"`, undefined);
        await queryRunner.query(`DROP TABLE "lod"`, undefined);
        await queryRunner.query(`DROP TABLE "versions"`, undefined);
        await queryRunner.query(`DROP TABLE "parts"`, undefined);
        await queryRunner.query(`DROP TABLE "part_types"`, undefined);
    }

}
