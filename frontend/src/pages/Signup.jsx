import { useState } from "react";
import axios from "axios";
import {
  validateName,
  validateEmail,
  validatePassword,
} from "../form/validate";
import Alert from "../components/Alert";
import InputField from "../components/InputField";
import GoogleAuthButton from "../components/GoogleAuthButton";
import { FaSpinner } from "react-icons/fa";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");

    const nameValidationError = validateName(name);
    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);

    if (
      nameValidationError ||
      emailValidationError ||
      passwordValidationError
    ) {
      setNameError(nameValidationError);
      setEmailError(emailValidationError);
      setPasswordError(passwordValidationError);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("/api/auth/signup", {
        name,
        email,
        password,
      });
      setSuccessMessage(
        "Signup successful. Please check your email for verification."
      );
    } catch (error) {
      console.log(error);
      setError(
        error.response ? error.response.data.message : "Error during signup."
      );
    } finally {
      setLoading(false);
    }
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

  const handleGoogleAuthClick = () => {
    setIsGoogleLoading(true);
    window.location.href = "/api/auth/google";
  };

  return (
    <>
      {(error || successMessage) && (
        <Alert
          message={error || successMessage}
          type={successMessage ? "success" : "error"}
        />
      )}
      <div className="flex items-center p-4 justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-96">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <InputField
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={nameError}
            />
            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
            />
            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center"
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
