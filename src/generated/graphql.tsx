import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export type Comic = {
  __typename?: 'Comic';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  issueNumber: Scalars['Int'];
  publisher?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
};

export type ComicCreateInput = {
  title: Scalars['String'];
  publisher: Scalars['String'];
  issueNumber: Scalars['Int'];
};


export type Mutation = {
  __typename?: 'Mutation';
  signupUser: User;
  createComic?: Maybe<Comic>;
  deleteComic?: Maybe<Comic>;
};


export type MutationSignupUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateComicArgs = {
  data: ComicCreateInput;
  ownerEmail: Scalars['String'];
};


export type MutationDeleteComicArgs = {
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  allUsers: Array<User>;
  comicById?: Maybe<Comic>;
  allComics?: Maybe<Array<Maybe<Comic>>>;
  comicsByUser?: Maybe<Array<Maybe<Comic>>>;
};


export type QueryComicByIdArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryComicsByUserArgs = {
  userUniqueInput: UserUniqueInput;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  comics: Array<Comic>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  comics?: Maybe<Array<ComicCreateInput>>;
};

export type UserUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
};

export type ComicsListQueryVariables = Exact<{ [key: string]: never; }>;


export type ComicsListQuery = (
  { __typename?: 'Query' }
  & { allComics?: Maybe<Array<Maybe<(
    { __typename?: 'Comic' }
    & Pick<Comic, 'id'>
    & ComicsListItemFragmentFragment
  )>>> }
);

export type ComicsListItemFragmentFragment = (
  { __typename?: 'Comic' }
  & Pick<Comic, 'title' | 'issueNumber'>
);

export type UsersListQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersListQuery = (
  { __typename?: 'Query' }
  & { allUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & UsersListItemFragmentFragment
  )> }
);

export type UsersListItemFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'email'>
);

export const ComicsListItemFragmentFragmentDoc = gql`
    fragment ComicsListItemFragment on Comic {
  title
  issueNumber
}
    `;
export const UsersListItemFragmentFragmentDoc = gql`
    fragment UsersListItemFragment on User {
  email
}
    `;
export const ComicsListDocument = gql`
    query ComicsList {
  allComics {
    id
    ...ComicsListItemFragment
  }
}
    ${ComicsListItemFragmentFragmentDoc}`;

/**
 * __useComicsListQuery__
 *
 * To run a query within a React component, call `useComicsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useComicsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useComicsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useComicsListQuery(baseOptions?: Apollo.QueryHookOptions<ComicsListQuery, ComicsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ComicsListQuery, ComicsListQueryVariables>(ComicsListDocument, options);
      }
export function useComicsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ComicsListQuery, ComicsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ComicsListQuery, ComicsListQueryVariables>(ComicsListDocument, options);
        }
export type ComicsListQueryHookResult = ReturnType<typeof useComicsListQuery>;
export type ComicsListLazyQueryHookResult = ReturnType<typeof useComicsListLazyQuery>;
export type ComicsListQueryResult = Apollo.QueryResult<ComicsListQuery, ComicsListQueryVariables>;
export const UsersListDocument = gql`
    query UsersList {
  allUsers {
    id
    ...UsersListItemFragment
  }
}
    ${UsersListItemFragmentFragmentDoc}`;

/**
 * __useUsersListQuery__
 *
 * To run a query within a React component, call `useUsersListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersListQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersListQuery(baseOptions?: Apollo.QueryHookOptions<UsersListQuery, UsersListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersListQuery, UsersListQueryVariables>(UsersListDocument, options);
      }
export function useUsersListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersListQuery, UsersListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersListQuery, UsersListQueryVariables>(UsersListDocument, options);
        }
export type UsersListQueryHookResult = ReturnType<typeof useUsersListQuery>;
export type UsersListLazyQueryHookResult = ReturnType<typeof useUsersListLazyQuery>;
export type UsersListQueryResult = Apollo.QueryResult<UsersListQuery, UsersListQueryVariables>;