import { Entity, PrimaryKey, Property} from "@mikro-orm/core";

@Entity()
export class Post {

  @PrimaryKey()
  _id!: number;

  @Property({type:"date"})
  createdAt:Date;

  @Property({type:"date", onUpdate:()=>new Date()})
  updatedAt:Date;

  @Property({type:"text"})
  title!: string;


}