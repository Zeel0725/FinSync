import React, { useEffect, useState } from "react";
import { getUsers } from "../api/userApi.js";
import UserForm from "../components/UserForm.jsx";
import UserList from "../components/UserList.jsx";

export default function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h1>👋 MongoDB User Manager</h1>
      <UserForm onUserAdded={(user) => setUsers([...users, user])} />
      <UserList users={users} />
    </div>
  );
}