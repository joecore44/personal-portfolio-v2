import { useQuery, gql } from "@apollo/client";

const GET_POST = gql`
query GetPost($slug: ID!) {
  post(id: $slug, idType: SLUG) {
    author {
      node {
        username
      }
    }
    content(format: RENDERED)
    date
    title
    featuredImage {
      node {
        altText
        description(format: RAW)
        sourceUrl
        title(format: RAW)
      }
    }
  }
}
`

export const getPost = (slug) => {
    const { error, data, loading } = useQuery(GET_POST, {
      variables: {
        slug
      }
    });

    return {
        error,
        data,
        loading
    }
}