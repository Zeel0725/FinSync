import React from "react";

export default function UserList({ users }) {
  return (
    <div>
      <h3>Users:</h3>
      <ul>
        {users.map((u) => (
          <li key={u._id}>
            {u.name} ({u.email}) — {u.age} years
          </li>
        ))}
      </ul>
    </div>
  );
}