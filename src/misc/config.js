const API_BASE_URL = `https://api.tvmaze.com`;

export async function apiGet(queryString) {
  //fetch function returns promise
  const response = await fetch(`${API_BASE_URL}${queryString}`).then(r =>
    r.json()
  );
  return response;
}
