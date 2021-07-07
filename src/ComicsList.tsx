import { gql, useQuery } from "@apollo/client";
import * as React from "react";
import { ComicsListItem, comicsListItemFragment } from "./ComicsListItem";
import { ComicsListQuery } from "./generated/graphql";

export const GET_ALL_COMICS = gql`
  query ComicsList {
    allComics {
      data {
        _id
        ...ComicsListItemFragment
      }
    }
  }
  ${comicsListItemFragment}
`;

export function ComicsList() {
 	const { data, error, loading } = useQuery<ComicsListQuery>(GET_ALL_COMICS);
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
        {data.allComics.data.map((comic: any) => (
          <ComicsListItem key={comic._id} comic={comic} />
        ))}
      </ul>
    </div>
  );
}
