import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Thumbnail {
  @Field(() => String, { nullable: true })
  type: string;
  @Field(() => String, { nullable: true })
  url: string;
  @Field(() => String, { nullable: true })
  description: string;
}

@ObjectType()
export class Di {
  @Field(() => String, { nullable: true })
  title: string;
  @Field(() => String, { nullable: true })
  creator: String;
  @Field(() => String, { nullable: true })
  link: string;
  @Field(() => String, { nullable: true })
  content: string;
  @Field(() => String, { nullable: true })
  contentSnippet: String;
  @Field(() => String, { nullable: true })
  guid: string;
  @Field(() => String, { nullable: true })
  date: string;
  @Field(() => String, { nullable: true })
  pubDate: string;
  @Field(() => String, { nullable: true })
  isoDate: string;
  @Field(() => Thumbnail, { nullable: true })
  thumbnail: Thumbnail;
}
