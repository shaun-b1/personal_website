import { Octokit } from 'octokit';
export { githubTestFunction };

async function githubTestFunction() {
  const octokit = new Octokit({
    auth: `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`,
  });

  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();
  console.log('Hello, %s', login);
}
