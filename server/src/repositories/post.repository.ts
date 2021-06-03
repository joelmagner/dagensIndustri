import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { PostResponse } from "./responses/post.response";
import { formatPost, validatePost } from "../utils/validation/post.validate";
import { Post } from "../entities/post";

@InputType()
export class PostInput {
  @Field()
  title: string;
  @Field()
  text: string;
}

@Resolver(Post)
export class PostRepository {
  @Mutation(() => PostResponse)
  async createPost(@Arg("input") input: PostInput): Promise<PostResponse> {
    const errors = validatePost(input);
    if (errors) return { errors };
    console.log("🚀 woho!", JSON.stringify(input));
    const post = formatPost(input);
    return { post };
  }

  @Query()
  getBool(): boolean {
    return true;
  }

  // @Query()
  // getString(): string {
  //   return "Hi!";
  // }

  // @Query()
  // getInt(@Arg("nr") nr: number): number {
  //   return nr + 100;
  // }
}
