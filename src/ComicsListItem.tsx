import { gql } from '@apollo/client';
import * as React from 'react';
import { ComicsListItemFragmentFragment } from './generated/graphql';

export const comicsListItemFragment = gql`
  fragment ComicsListItemFragment on Comic {
    title,
    issueNumber
}`;

interface Props {
  comic: ComicsListItemFragmentFragment
}

export function ComicsListItem({ comic }: Props) {
  return (
    <div>
     <div>{comic.title}  #{comic.issueNumber}</div>
    </div>
  );
}