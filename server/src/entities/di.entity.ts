import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity } from "typeorm";

@ObjectType()
@Entity()
export class Di extends BaseEntity {
  @Column()
  @Field(() => String, { nullable: true })
  title: string;
  @Column()
  @Field(() => String, { nullable: true })
  creator: String;
  @Column()
  @Field(() => String, { nullable: true })
  link: string;
  @Column()
  @Field(() => String, { nullable: true })
  content: string;
  @Column()
  @Field(() => String, { nullable: true })
  contentSnippet: String;
  @Column()
  @Field(() => String, { nullable: true })
  guid: string;
  @Column()
  @Field(() => String, { nullable: true })
  date: string;
  @Column()
  @Field(() => String, { nullable: true })
  pubDate: string;
  @Column()
  @Field(() => String, { nullable: true })
  isoDate: string;
}
