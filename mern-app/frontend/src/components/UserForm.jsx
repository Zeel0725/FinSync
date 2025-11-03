import React, { useState } from "react";
import { createUser } from "../api/userApi";

export default function UserForm({ onUserAdded }) {
  const [form, setForm] = useState({ name: "", email: "", age: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = await createUser(form);
    onUserAdded(newUser);
    setForm({ name: "", email: "", age: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        placeholder="Age"
        type="number"
        value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })}
      />
      <button type="submit">Add User</button>
    </form>
  );
}