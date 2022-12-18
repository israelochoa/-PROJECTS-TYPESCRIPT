"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const core_1 = require("@mikro-orm/core");
exports.Book = new core_1.EntitySchema({
    name: 'Book',
    extends: 'CustomBaseEntity',
    properties: {
        title: { type: 'string' },
        author: { reference: 'm:1', entity: 'Author' },
        publisher: { reference: 'm:1', entity: 'Publisher', ref: true, nullable: true },
        tags: { reference: 'm:n', entity: 'BookTag', fixedOrder: true },
    },
});
//# sourceMappingURL=Book.js.map