const gat = (url, method, body, authToken) => {
  const headers = {
    "Content-Type": "application/json",
    "Accepts": "application/json",
  }
  if (authToken) {
    headers["Authorization"] = `Token token=${ authToken }`
  }
  return fetch(url, { method, headers, body });
}

const register = (name, email, password) => {
  return gat("http://localhost:3000/api/v1/users", "POST",
    JSON.stringify({
      name,
      email,
      password
    })
  );
}

const login = (email, password) => {
  return gat("http://localhost:3000/api/v1/sessions", "POST",
    JSON.stringify({
      email,
      password
    })
  );
}

// const snacks = (userId, authToken) => {
//   return gat(`http://localhost:3001/users/${ userId }/snacks`, null, null, authToken)
// }

export default {
  register, login /*,snacks*/
};
