import { GraphQLClient, gql } from 'graphql-request';
const api_key = process.env.PERSONAL_ACCESS_TOKEN;

const query = gql`
  query {
    user(login: "shaun-b1") {
      pinnedItems(first: 4, types: [REPOSITORY]) {
        edges {
          node {
            ... on Repository {
              name
              description
              url
              openGraphImageUrl
              languages(first: 5) {
                nodes {
                  name
                }
              }
              deployments(last: 1) {
                nodes {
                  latestStatus {
                    environmentUrl
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export async function fetchData() {
  const client = new GraphQLClient('https://api.github.com/graphql', {
    headers: {
      Authorization: `Bearer ${api_key}`,
    },
  });

  try {
    const data = await client.request(query);
    return data;
  } catch (error) {
    console.error('Error fetching pinned repositories:', error);
    throw error;
  }
}
