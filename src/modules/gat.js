const gat = (url, method="GET", body, authToken) => {
  const headers = {
    "Content-Type": "application/json",
    "Accepts": "application/json",
  }
  if (authToken) {
    headers["Authorization"] = `Token token=${ authToken }`
  }
  return fetch(url, { method, headers, body });
}

const profile = (userId, authToken) => {
  return gat(`http://localhost:3001/users/${ userId }`, null, null, authToken)
}

export default {
  profile
};
