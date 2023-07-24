import React, { useState, useContext } from "react";

//simplyf process.
// axios=> http client.

import useAxios from "../../Hooks/useAxios";
import APPCONTEXT from "../../Context/APP";

import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser, setToken, setIsLoggedIn } = useContext(APPCONTEXT);

  const navigate = useNavigate();

  const request = useAxios();

  console.log(email);
  console.log(password);

  async function handleSubmit() {
    if (email === "" || password === "") {
      alert("Email is not valid");
      return;
    }

    const res = await request({
      url: "user/login",
      method: "POST",
      data: {
        email: email,
        password: password,
      },
    });

    if (res === "error") {
      return;
    }

    const user = res.user;
    const token = res.token;
    setUser(user);
    setToken(token);
    setIsLoggedIn(true);
    navigate("/");
  }

  return (
    <div>
      <p className="">
        <label>Email</label>
        <input
          type="email"
          value={email}
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p className="">
        <label>Password</label>
        <input
          type="password"
          value={password}
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default SignIn;
