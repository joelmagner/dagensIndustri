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
};

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
  )> }
);


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
  }
}
    `;

export function usePostsQuery(options: Omit<Urql.UseQueryArgs<PostsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PostsQuery>({ query: PostsDocument, ...options });
};