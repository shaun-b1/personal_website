import { fetchData } from './github_pins';
import { GraphQLClient } from 'graphql-request';

jest.mock('graphql-request');

describe('fetchData function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches data from the GitHub API successfully', async () => {
    const expectedData = {
      data: {
        user: {
          pinnedItems: {
            edges: [
              {
                node: {
                  name: 'weather_app',
                  description:
                    'A project to learn about the use of APIs in front ends',
                  url: 'https://github.com/shaun-b1/weather_app',
                  openGraphImageUrl:
                    'https://repository-images.githubusercontent.com/658134694/60a360e5-c3fb-4f6a-82bf-5e659ee1049a',
                  languages: {
                    nodes: [
                      {
                        name: 'JavaScript',
                      },
                      {
                        name: 'Shell',
                      },
                      {
                        name: 'SCSS',
                      },
                    ],
                  },
                  deployments: {
                    nodes: [
                      {
                        latestStatus: {
                          environmentUrl:
                            'https://shaun-b1.github.io/weather_app/',
                        },
                      },
                    ],
                  },
                },
              },
              {
                node: {
                  name: 'to_do_list',
                  description:
                    'A project to solidify my understanding of design patterns in JavaScript',
                  url: 'https://github.com/shaun-b1/to_do_list',
                  openGraphImageUrl:
                    'https://repository-images.githubusercontent.com/592506805/88e162ec-50c7-4a95-a67b-e379ca517b66',
                  languages: {
                    nodes: [
                      {
                        name: 'JavaScript',
                      },
                      {
                        name: 'CSS',
                      },
                      {
                        name: 'Shell',
                      },
                    ],
                  },
                  deployments: {
                    nodes: [
                      {
                        latestStatus: {
                          environmentUrl:
                            'https://shaun-b1.github.io/to_do_list/',
                        },
                      },
                    ],
                  },
                },
              },
              {
                node: {
                  name: 'restaurant_page',
                  description:
                    'A project to continue building experience with JavaScript and webpack',
                  url: 'https://github.com/shaun-b1/restaurant_page',
                  openGraphImageUrl:
                    'https://repository-images.githubusercontent.com/566069383/4a1d77d4-6118-4770-a924-64ef60c6a60a',
                  languages: {
                    nodes: [
                      {
                        name: 'JavaScript',
                      },
                      {
                        name: 'CSS',
                      },
                    ],
                  },
                  deployments: {
                    nodes: [
                      {
                        latestStatus: {
                          environmentUrl:
                            'https://shaun-b1.github.io/restaurant_page/',
                        },
                      },
                    ],
                  },
                },
              },
              {
                node: {
                  name: 'tic_tac_toe_js',
                  description:
                    'A project to develop a better understanding of JavaScript Factory Functions and the Module Pattern',
                  url: 'https://github.com/shaun-b1/tic_tac_toe_js',
                  openGraphImageUrl:
                    'https://repository-images.githubusercontent.com/491945175/169d9192-770c-4b3d-a61e-e032411b01e9',
                  languages: {
                    nodes: [
                      {
                        name: 'CSS',
                      },
                      {
                        name: 'HTML',
                      },
                      {
                        name: 'JavaScript',
                      },
                    ],
                  },
                  deployments: {
                    nodes: [
                      {
                        latestStatus: {
                          environmentUrl:
                            'https://shaun-b1.github.io/tic_tac_toe_js/',
                        },
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
    };

    GraphQLClient.prototype.request = jest
      .fn()
      .mockResolvedValueOnce(expectedData);

    const data = await fetchData();

    expect(GraphQLClient).toHaveBeenCalledWith(
      'https://api.github.com/graphql',
      {
        headers: {
          Authorization: `Bearer ${process.env.PERSONAL_ACCESS_TOKEN}`,
        },
      },
    );

    expect(data).toEqual(expectedData);
  });

  it('handles errors correctly', async () => {
    const mockError = new Error('Mocked error');
    GraphQLClient.prototype.request = jest
      .fn()
      .mockRejectedValueOnce(mockError);

    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    await expect(fetchData()).rejects.toEqual(mockError);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error fetching pinned repositories:',
      mockError,
    );

    expect(GraphQLClient).toHaveBeenCalledWith(
      'https://api.github.com/graphql',
      {
        headers: {
          Authorization: `Bearer ${process.env.PERSONAL_ACCESS_TOKEN}`,
        },
      },
    );
  });
});
