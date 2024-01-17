import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const { data } = await axios.post(
        "http://localhost:8080/login",
        user,
        { credentials: "include" }
      );
      console.log(data);
      alert(data.message);
      const tasks = await axios.get("http://localhost:8080/user", {
        credentials: true,
      });
      console.log(tasks);
    } catch (error) {
      const errorResponse = error.response.data.error;
      alert(errorResponse.message);
    }
  };
  return (
    <>
      <fieldset>
        <legend>
          <h1>Login</h1>
        </legend>
        <form onSubmit={handleLoginSubmit} style={{ margin: "auto" }}>
          <label htmlFor="email">Email: </label>
          <input
            onChange={handleInputChange}
            type="email"
            name="email"
            id="email"
          />
          <br />
          <hr />
          <label htmlFor="password">Password: </label>
          <input
            onChange={handleInputChange}
            type="password"
            name="password"
            id="password"
          />
          <br />
          <hr />
          <input type="submit" value="Login" />
        </form>
        <p>
          <b>Don't have an account: </b>
          <Link to="/signup">Signup</Link>
        </p>
        <div className="oauth">
          <button>
            <a href="http://localhost:8080/auth/google">Continue with Google</a>
          </button>
          <br />
        
        </div>
      </fieldset>
    </>
  );
};

export default Login;