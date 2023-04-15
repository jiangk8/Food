import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

const API_URL =
  "https://api-us-west-2.hygraph.com/v2/clbvxfsuy42y401usdso05d8l/master";

const graphQLClient = new GraphQLClient(API_URL);

export function useGetPosts() {
  return useQuery("get-posts", async () => {
    const { getPostList } = await graphQLClient.request(gql`
      {
        posts {
          id
          title
          notes {
            html
          }
          ingredients
        }
      }
    `);
    return getPostList;
  });
}
