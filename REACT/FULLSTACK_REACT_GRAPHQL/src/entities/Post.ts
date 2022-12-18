import { Entity, PrimaryKey, Property} from "@mikro-orm/core";

@Entity()
export class Post {

  @PrimaryKey()
  _id!: number;

  

  @Property()
  title!: string;

   constructor(title: string) {
    this.title = title;
    
  }

}