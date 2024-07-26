// src/pages/Login.js

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import InputField from "../components/form/InputField";
import GoogleAuthButton from "../components/GoogleAuthButton";
import { FaSpinner } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setIsLoading(true);
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      // Handle successful login (e.g., redirect)
    } catch (error) {
      if (error.response?.data?.errors) {
        const { email: emailErr, password: passwordErr } =
          error.response.data.errors;
        setEmailError(emailErr || "");
        setPasswordError(passwordErr || "");
      } else {
        setEmailError("Invalid credentials or email not verified.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuthClick = () => {
    setIsGoogleLoading(true);
    window.location.href = "/api/auth/google";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="cursor-pointer rounded-md shadow-lg bg-white dark:bg-gray-800 relative w-80">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              error={emailError}
            />
            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              error={passwordError}
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center mt-4"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>
          <div className="my-4 text-center">or</div>
          <GoogleAuthButton
            text="Log In with Google"
            isLoading={isGoogleLoading}
            onClick={handleGoogleAuthClick}
          />
          <div className="mt-4 text-center">
            <Link
              to="/forgot-password"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
