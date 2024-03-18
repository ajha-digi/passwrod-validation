import { useState, useEffect } from "react";
import {
  digitRegex,
  emailRegex,
  lowerCaseRegex,
  passwordRegex,
  specialRegex,
  upperCaseRegex,
  whiteSpaceRegex,
} from "./constant";

import "./style.css";

function App() {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isValid, setIsValid] = useState(false);

  const isValidated = (_data) =>
    _data.filter(Boolean).length === 3 &&
    Object.values(error).filter(Boolean).length < 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("+++++", data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      if (!emailRegex.test(value)) {
        setError({ ...error, email: "Please enter valid email address!!" });
      } else {
        setError({ ...error, email: "" });
      }
    }

    if (name === "password") {
      if (!passwordRegex.test(value)) {
        let errorMessage = "Missing : ";
        if (!lowerCaseRegex.test(value)) {
          errorMessage += "LowerCase";
        } else if (!upperCaseRegex.test(value)) {
          errorMessage += "UpperCase";
        } else if (!digitRegex.test(value)) {
          errorMessage += "Numeric value";
        } else if (!specialRegex.test(value)) {
          errorMessage += "Special character";
        } else if (whiteSpaceRegex.test(value)) {
          errorMessage = "Remove White Space";
        } else if (value.length < 8) {
          errorMessage = "Password must be 8 - 12 characters long";
        } else if (value.length > 12) {
          errorMessage = "Password must be 8 - 12 characters long";
        }
        setError({ ...error, password: errorMessage });
      } else {
        setError({ ...error, password: "" });
      }
    }

    if (name === "confirmPassword") {
      if (value !== data.password) {
        setError({
          ...error,
          confirmPassword: "Confirm Passwrod must be same as password",
        });
      } else {
        setError({ ...error, confirmPassword: "" });
      }
    }

    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setData({
      email: "",
      password: "",
      confirmPassword: "",
    });
    setError({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleBlur = () => {
    if (data.password !== data.confirmPassword) {
      setError({
        ...error,
        confirmPassword: "Confirm Passwrod must be same as password",
      });
      setData({ ...data, confirmPassword: "" });
    }
  };

  useEffect(() => {
    if (isValidated(Object.values(data))) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [data]);

  return (
    <form noValidate style={{ display: "flex" }} onSubmit={handleSubmit}>
      <label htmlFor="email">
        <span>Email</span>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <span style={{ color: "red" }}>{error.email}</span>
      </label>
      <label htmlFor="password">
        <span>Password</span>
        <input
          type="password"
          id="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <span style={{ color: "red" }}>{error.password}</span>
      </label>
      <label htmlFor="confirmPassword">
        <span>Confirm Password</span>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={data.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <span style={{ color: "red" }}>{error.confirmPassword}</span>
      </label>
      <div>
        <button type="submit" disabled={!isValid}>
          Submit
        </button>
        <button type="reset" onClick={handleReset}>
          Rest
        </button>
      </div>
    </form>
  );
}

export default App;
