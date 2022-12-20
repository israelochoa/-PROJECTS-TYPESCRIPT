"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const Post_1 = require("./entities/Post");
const mikro_orm_config_1 = __importDefault(require("./mikro-orm.config"));
const main = async () => {
    const orm = await core_1.MikroORM.init(mikro_orm_config_1.default);
    await orm.getMigrator().up();
    const post = await orm.em.fork().create(Post_1.Post, { title: "my first pos2t", createdAt: new Date(), updatedAt: new Date() });
    await orm.em.fork().persistAndFlush(post);
};
main().catch((er) => { console.error(er); });
//# sourceMappingURL=index.js.map