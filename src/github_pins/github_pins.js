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
  const pins = document.createElement('div');
  pins.classList.add('right-column__pins');

  try {
    const data = await fetchData();
    console.log(data.user.pinnedItems.edges);
    data.user.pinnedItems.edges.forEach((edge) => {
      const { name, description, languages } = edge.node;

      const pin = document.createElement('div');
      pin.classList.add('pins__pin');

      const pinTitle = document.createElement('h3');
      pinTitle.classList.add('pin__title');
      pinTitle.textContent = displayName(name);

      const pinDescription = document.createElement('p');
      pinDescription.classList.add('pin__description');
      pinDescription.textContent = description;

      const pinLanguages = document.createElement('div');
      pinLanguages.classList.add('pin__languages');

      languages.nodes.forEach((language) => {
        const pinLanguage = document.createElement('p');
        pinLanguage.classList.add('pin__language');
        pinLanguage.textContent = language.name;
        pinLanguages.appendChild(pinLanguage);
      });

      console.log(displayName(name));
      console.log(description);
      languages.nodes.forEach((language) => {
        console.log(language.name);
      });

      pin.append(pinTitle, pinDescription, pinLanguages);

      pins.appendChild(pin);
    });
  } catch (error) {
    console.error('Error displaying data:', error);
  }

  return pins;
}

function displayName(name) {
  const splitName = name.split('_');
  const capitalisedName = splitName.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalisedName.join(' ');
}
