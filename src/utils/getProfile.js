async function getGithubProfile(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return response.json();
}

export { getGithubProfile };
