import { gql } from "@apollo/client";

export const GET_SONGS_BY_PLAYLIST_ID = gql`
  query ($playlistId: Int!, $search: String) {
    getSongs(playlistId: $playlistId, search: $search) {
      title
      duration
      artist
      photo
      url
    }
  }
`;
