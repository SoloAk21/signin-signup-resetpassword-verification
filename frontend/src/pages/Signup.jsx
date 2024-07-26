import { useState, useEffect } from "react";
import axios from "axios";
import {
  validateName,
  validateEmail,
  validatePassword,
} from "../form/validate";
import Alert from "../components/Alert";
import InputField from "../components/form/InputField";

import GoogleAuthButton from "../components/GoogleAuthButton";
import { FaSpinner } from "react-icons/fa";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({ type: "", content: "" });
  const [loading, setLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, password, userType } = formData;
    return {
      name: validateName(name),
      email: validateEmail(email),
      password: validatePassword(password),
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setMessage({ type: "", content: "" });

    const validationErrors = validateForm();
    if (Object.values(validationErrors).some((err) => err)) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post("/api/auth/signup", formData);
      setMessage({
        type: "success",
        content: "Signup successful. Please check your email for verification.",
      });
    } catch (error) {
      setMessage({
        type: "error",
        content: error.response?.data.message || "Error during signup.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (message.content) {
      const timer = setTimeout(
        () => setMessage({ type: "", content: "" }),
        3000
      );
      return () => clearTimeout(timer);
    }
  }, [message.content]);

  const handleGoogleAuthClick = () => {
    setIsGoogleLoading(true);
    window.location.href = "/api/auth/google";
  };

  return (
    <>
      {message.content && (
        <Alert message={message.content} type={message.type} />
      )}
      <div className="flex items-center p-4 justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-96">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <InputField
              label="Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="Enter your full name"
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="Enter your email address"
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              placeholder="Enter a secure password"
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center mt-4"
              disabled={loading}
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Sign up ...
                </>
              ) : (
                "Sign up"
              )}
            </button>
          </form>
          <div className="my-4 text-center">or</div>
          <GoogleAuthButton
            text="Sign Up with Google"
            isLoading={isGoogleLoading}
            onClick={handleGoogleAuthClick}
          />
        </div>
      </div>
    </>
  );
};

export default Signup;
