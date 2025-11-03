const API_URL = "http://localhost:8000/api/users"; // backend endpoint

// GET all users
export const getUsers = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

// POST new user
export const createUser = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};