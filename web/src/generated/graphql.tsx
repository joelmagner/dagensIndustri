import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  posts: Array<Di>;
  getBool: Scalars['Boolean'];
};


export type QueryPostsArgs = {
  order?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  url: Scalars['String'];
};

export type Di = {
  __typename?: 'Di';
  title?: Maybe<Scalars['String']>;
  creator?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  contentSnippet?: Maybe<Scalars['String']>;
  guid?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  pubDate?: Maybe<Scalars['String']>;
  isoDate?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Thumbnail>;
};

export type Thumbnail = {
  __typename?: 'Thumbnail';
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: PostResponse;
};


export type MutationCreatePostArgs = {
  input: PostInput;
};

export type PostResponse = {
  __typename?: 'PostResponse';
  errors?: Maybe<Array<FieldError>>;
  post?: Maybe<Post>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  title: Scalars['String'];
  text: Scalars['String'];
  siffra?: Maybe<Scalars['Int']>;
};

export type PostInput = {
  title: Scalars['String'];
  text: Scalars['String'];
};

export type CreatePostMutationVariables = Exact<{
  input: PostInput;
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename?: 'PostResponse' }
    & { post?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'title' | 'text'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type PostsQueryVariables = Exact<{
  url: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Boolean']>;
}>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Di' }
    & Pick<Di, 'title' | 'creator' | 'link' | 'content' | 'contentSnippet' | 'guid' | 'pubDate' | 'isoDate'>
    & { thumbnail?: Maybe<(
      { __typename?: 'Thumbnail' }
      & Pick<Thumbnail, 'url' | 'type' | 'description'>
    )> }
  )> }
);


export const CreatePostDocument = gql`
    mutation CreatePost($input: PostInput!) {
  createPost(input: $input) {
    post {
      title
      text
    }
    errors {
      field
      message
    }
  }
}
    `;

export function useCreatePostMutation() {
  return Urql.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument);
};
export const PostsDocument = gql`
    query Posts($url: String!, $limit: Int, $order: Boolean) {
  posts(url: $url, limit: $limit, order: $order) {
    title
    creator
    link
    content
    contentSnippet
    guid
    pubDate
    isoDate
    thumbnail {
      url
      type
      description
    }
  }
}
    `;

export function usePostsQuery(options: Omit<Urql.UseQueryArgs<PostsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PostsQuery>({ query: PostsDocument, ...options });
};