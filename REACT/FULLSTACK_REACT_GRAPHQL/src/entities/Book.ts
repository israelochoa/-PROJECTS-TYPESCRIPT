import { Ref, Collection, EntitySchema } from "@mikro-orm/core";

export interface IBook extends CustomBaseEntity {
    title: string;
    author: Author;
    publisher?: Ref<Publisher>;
    tags: Collection<BookTag>;
  }
  
  export const Book = new EntitySchema<IBook, CustomBaseEntity>({
    name: 'Book',
    extends: 'CustomBaseEntity',
    properties: {
      title: { type: 'string' },
      author: { reference: 'm:1', entity: 'Author' },
      publisher: { reference: 'm:1', entity: 'Publisher', ref: true, nullable: true },
      tags: { reference: 'm:n', entity: 'BookTag', fixedOrder: true },
    },
  });