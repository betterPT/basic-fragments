import { gql, useQuery } from "@apollo/client";
import * as React from "react";
import { comicsListItemFragment } from "./ComicsListItem";
import { UsersListQuery } from "./generated/graphql";
import { usersListItemFragment, UsersListItem } from "./UsersListItem";

export const GET_ALL_USERS = gql`
  query UsersList {
    allUsers {
      id
      ...UsersListItemFragment
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
      <h1>Users List</h1>
      <ul>
        {data.allUsers?.map((user: any) => (
          <UsersListItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}
