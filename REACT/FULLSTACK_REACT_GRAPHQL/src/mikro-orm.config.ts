
import { __prod__ } from "./constants";

import { MikroORM } from "@mikro-orm/core";
import { TSMigrationGenerator } from '@mikro-orm/migrations';
import { format } from 'sql-formatter';

class CustomMigrationGenerator extends TSMigrationGenerator {

        generateMigrationFile(className: string, diff: { up: string[]; down: string[] }): string {
          const comment = '// this file was generated via custom migration generator for project fullstact react graphql\n\n';
          return comment + super.generateMigrationFile(className, diff);
        }
      
        createStatement(sql: string, padLeft: number): string {
          sql = format(sql, { language: 'postgresql' });
          // a bit of indenting magic
          sql = sql.split('\n').map((l, i) => i === 0 ? l : `${' '.repeat(padLeft + 13)}${l}`).join('\n');
      
          return super.createStatement(sql, padLeft);
        }
      
}
export default{
    
        entities:['./src/entities/**/*.ts'],
        user:"postgres",
        password:"12346789",
        dbName:'lireddit',
        type:'postgresql',
        debug: !__prod__,
        migratons: {
                table: 'mikro_orm_migrations', // name of database table with log of executed transactions
                path: '../dist/migrations',
                pathTs: './migrations',
                glob: '!(*.d).{js,ts}', // how to match migration files (all .js and .ts files, but not .d.ts)
                transactional: true, // wrap each migration in a transaction
                disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
                allOrNothing: true, // wrap all migrations in master transaction
                dropTables: true, // allow to disable table dropping
                safe: false, // allow to disable table and column dropping
                snapshot: true, // save snapshot when creating new migrations
                emit: 'ts', // migration generation mode
                generator: CustomMigrationGenerator, // migration generator, e.g. to allow custom formatting
        },
    
} as Parameters<typeof MikroORM.init>[0];