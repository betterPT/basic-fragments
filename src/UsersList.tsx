import { gql, useQuery } from '@apollo/client';
import * as React from 'react';
import { UsersListQuery } from './generated/graphql';
import { usersListItemFragment, UsersListItem } from './UsersListItem';

export const GET_ALL_USERS = gql`
  query UsersList {
    allUsers {
      data {
        _id
        ...UsersListItemFragment
      }
    }
  }
  ${usersListItemFragment}
`;

export function UsersList() {
  const { data, error, loading } = useQuery<UsersListQuery>(GET_ALL_USERS);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error...</div>;
  }
  return (
    <div>
      <h1>Comics List</h1>
      <ul>
        {data.allUsers.data.map((user: any) => (
          <UsersListItem key={user._id} user={user} />
        ))}
      </ul>
    </div>
  );
}
