import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import config from './mikro-orm.config';

const main= async () => {
	const orm=await MikroORM.init(config);
    await orm.getMigrator().up();
    
    const post=await orm.em.fork().create(Post,{title:"my first pos2t",createdAt:new Date(),updatedAt:new Date()});
    await orm.em.fork().persistAndFlush(post);
}
main().catch((er)=>{console.error(er)});