"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20221205230751 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20221205230751 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "post" ("_id" serial primary key, "title" varchar(255) not null);');
    }
    async down() {
        this.addSql('drop table if exists "post" cascade;');
    }
}
exports.Migration20221205230751 = Migration20221205230751;
//# sourceMappingURL=Migration20221205230751.js.map