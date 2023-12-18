// Import the react JS packages
import axios from "axios";
import { useState } from "react";

// Define your styles
const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
  borderRadius: "10px",
  backgroundColor: "#f8f9fa",
};

const inputStyle = {
  width: "100%",
  padding: "1rem",
  marginBottom: "1rem",
  borderRadius: "5px",
  border: "1px solid #ced4da",
};

const buttonStyle = {
  width: "100%",
  padding: "1rem",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

// Define the Login function.
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Create the submit method.
  const submit = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };

    // Create the POST request
    const { data } = await axios.post("http://localhost:8000/api/token/", user, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    // Initialize the access & refresh token in localstorage.
    localStorage.clear();
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);
    axios.defaults.headers.common["Authorization"] = `Bearer ${data["access"]}`;
    window.location.href = "/";
  };

  return (
    <div style={formStyle}>
      <form onSubmit={submit}>
        <h3>Sign In</h3>
        <label>Username</label>
        <input
          style={inputStyle}
          placeholder="Enter Username"
          name="username"
          type="text"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          style={inputStyle}
          name="password"
          type="password"
          placeholder="Enter password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={buttonStyle} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
