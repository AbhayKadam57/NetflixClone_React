const user = JSON.parse(localStorage.getItem("user"));

export const InitiState = {
  username: user || null,
};
