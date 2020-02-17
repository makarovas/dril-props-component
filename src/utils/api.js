export default function fetchRepos(langauge) {
  const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=start:>1+language:${langauge}&sort=start&order=desc&type=Repositories`);

  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      if (!data.items) {
        throw new Error(data.message);
      }

      return data.items;
    });
}
