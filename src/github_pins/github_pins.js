import { GraphQLClient, gql } from 'graphql-request';
export { displayData, fetchData };
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

async function fetchData() {
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

async function displayData() {
  try {
    const data = await fetchData();
    console.log(data.user.pinnedItems.edges);
    data.user.pinnedItems.edges.forEach((edge) => {
      const { name, description, languages } = edge.node;

      console.log(name);
      console.log(description);
      languages.nodes.forEach((language) => {
        console.log(language.name);
      });
    });
  } catch (error) {
    console.error('Error displaying data:', error);
  }
}
