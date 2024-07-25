// src/pages/Login.js

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import InputField from "../components/InputField";
import Alert from "../components/Alert";
import GoogleAuthButton from "../components/GoogleAuthButton";
import { FaSpinner } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    setSuccessMessage("");
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      setSuccessMessage("Login successful.");
    } catch (error) {
      setError("Invalid credentials or email not verified.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuthClick = () => {
    setIsGoogleLoading(true);
    window.location.href = "/api/auth/google";
  };

  // Clear alert after 3 seconds
  useEffect(() => {
    if (error || successMessage) {
      const timer = setTimeout(() => {
        setError("");
        setSuccessMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, successMessage]);

  return (
    <>
      {(error || successMessage) && (
        <Alert
          message={error || successMessage}
          type={successMessage ? "success" : "error"}
        />
      )}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-80">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center"
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
            <Link to="/forgot-password" className="text-blue-500">
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
