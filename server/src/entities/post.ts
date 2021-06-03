import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Post {
  @Field()
  title!: string;
  @Field()
  text!: string;
  @Field(() => Int, { nullable: true })
  siffra?: number;
}
