import { useQuery, gql } from "@apollo/client";

const GET_POSTS = gql`
query GetPosts {
    posts {
        nodes {
          author {
            node {
              name
            }
          }
          featuredImage {
            node {
              altText
              date
              sourceUrl
              title(format: RAW)
              description(format: RAW)
            }
          }
          link
          title
          date
          uri
          slug
        }
      }
  }
`

export const getPosts = () => {
    const { error, data, loading } = useQuery(GET_POSTS);

    return {
        error,
        data,
        loading
    }
}