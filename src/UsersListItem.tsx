import { gql } from '@apollo/client';
import * as React from 'react';
import { UsersListItemFragmentFragment } from './generated/graphql';

export const usersListItemFragment = gql`
  fragment UsersListItemFragment on User {
    email
}`;

interface Props {
  user: UsersListItemFragmentFragment
}

export function UsersListItem({ user }: Props) {
  return (
    <div>
     <div>{user.email}</div>
    </div>
  );
}