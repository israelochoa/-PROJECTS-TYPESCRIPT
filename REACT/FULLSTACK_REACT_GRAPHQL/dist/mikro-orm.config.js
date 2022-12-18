"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const migrations_1 = require("@mikro-orm/migrations");
const sql_formatter_1 = require("sql-formatter");
class CustomMigrationGenerator extends migrations_1.TSMigrationGenerator {
    generateMigrationFile(className, diff) {
        const comment = '// this file was generated via custom migration generator for project fullstact react graphql\n\n';
        return comment + super.generateMigrationFile(className, diff);
    }
    createStatement(sql, padLeft) {
        sql = (0, sql_formatter_1.format)(sql, { language: 'postgresql' });
        sql = sql.split('\n').map((l, i) => i === 0 ? l : `${' '.repeat(padLeft + 13)}${l}`).join('\n');
        return super.createStatement(sql, padLeft);
    }
}
exports.default = {
    entities: ['./src/entities/**/*.ts'],
    user: "postgres",
    password: "12346789",
    dbName: 'lireddit',
    type: 'postgresql',
    debug: !constants_1.__prod__,
    migratons: {
        table: 'mikro_orm_migrations',
        path: '../dist/migrations',
        pathTs: './migrations',
        glob: '!(*.d).{js,ts}',
        transactional: true,
        disableForeignKeys: true,
        allOrNothing: true,
        dropTables: true,
        safe: false,
        snapshot: true,
        emit: 'ts',
        generator: CustomMigrationGenerator,
    },
};
//# sourceMappingURL=mikro-orm.config.js.map