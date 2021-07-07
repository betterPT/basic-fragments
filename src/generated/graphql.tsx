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
  Date: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  Time: any;
};







export type Comic = {
  __typename?: 'Comic';
  /** The document's ID. */
  _id: Scalars['ID'];
  issueNumber: Scalars['Int'];
  publisher: Scalars['String'];
  title: Scalars['String'];
  user?: Maybe<User>;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

/** 'Comic' input values */
export type ComicInput = {
  title: Scalars['String'];
  publisher: Scalars['String'];
  issueNumber: Scalars['Int'];
  user?: Maybe<ComicUserRelation>;
};

/** The pagination object for elements of type 'Comic'. */
export type ComicPage = {
  __typename?: 'ComicPage';
  /** The elements of type 'Comic' in this page. */
  data: Array<Maybe<Comic>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

/** Allow manipulating the relationship between the types 'Comic' and 'User' using the field 'Comic.user'. */
export type ComicUserRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>;
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
  /** If true, disconnects this document from 'User' */
  disconnect?: Maybe<Scalars['Boolean']>;
};



export type Mutation = {
  __typename?: 'Mutation';
  /** Update an existing document in the collection of 'User' */
  updateUser?: Maybe<User>;
  /** Create a new document in the collection of 'User' */
  createUser: User;
  /** Update an existing document in the collection of 'Comic' */
  updateComic?: Maybe<Comic>;
  /** Delete an existing document in the collection of 'Comic' */
  deleteComic?: Maybe<Comic>;
  /** Delete an existing document in the collection of 'User' */
  deleteUser?: Maybe<User>;
  /** Create a new document in the collection of 'Comic' */
  createComic: Comic;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data: UserInput;
};


export type MutationCreateUserArgs = {
  data: UserInput;
};


export type MutationUpdateComicArgs = {
  id: Scalars['ID'];
  data: ComicInput;
};


export type MutationDeleteComicArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationCreateComicArgs = {
  data: ComicInput;
};

export type Query = {
  __typename?: 'Query';
  allComics: ComicPage;
  comicsByTitle: ComicPage;
  allUsers: UserPage;
  /** Find a document from the collection of 'User' by its id. */
  findUserByID?: Maybe<User>;
  /** Find a document from the collection of 'Comic' by its id. */
  findComicByID?: Maybe<Comic>;
  usersByEmail: UserPage;
};


export type QueryAllComicsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryComicsByTitleArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};


export type QueryAllUsersArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryFindUserByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindComicByIdArgs = {
  id: Scalars['ID'];
};


export type QueryUsersByEmailArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
  email: Scalars['String'];
};


export type User = {
  __typename?: 'User';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  email: Scalars['String'];
  comics: ComicPage;
};


export type UserComicsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};

/** Allow manipulating the relationship between the types 'User' and 'Comic'. */
export type UserComicsRelation = {
  /** Create one or more documents of type 'Comic' and associate them with the current document. */
  create?: Maybe<Array<Maybe<ComicInput>>>;
  /** Connect one or more documents of type 'Comic' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Disconnect the given documents of type 'Comic' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** 'User' input values */
export type UserInput = {
  email: Scalars['String'];
  comics?: Maybe<UserComicsRelation>;
};

/** The pagination object for elements of type 'User'. */
export type UserPage = {
  __typename?: 'UserPage';
  /** The elements of type 'User' in this page. */
  data: Array<Maybe<User>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type ComicsListQueryVariables = Exact<{ [key: string]: never; }>;


export type ComicsListQuery = (
  { __typename?: 'Query' }
  & { allComics: (
    { __typename?: 'ComicPage' }
    & { data: Array<Maybe<(
      { __typename?: 'Comic' }
      & Pick<Comic, '_id'>
      & ComicsListItemFragmentFragment
    )>> }
  ) }
);

export type ComicsListItemFragmentFragment = (
  { __typename?: 'Comic' }
  & Pick<Comic, 'title' | 'issueNumber'>
);

export type UsersListQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersListQuery = (
  { __typename?: 'Query' }
  & { allUsers: (
    { __typename?: 'UserPage' }
    & { data: Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, '_id'>
      & UsersListItemFragmentFragment
    )>> }
  ) }
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
    data {
      _id
      ...ComicsListItemFragment
    }
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
    data {
      _id
      ...UsersListItemFragment
    }
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