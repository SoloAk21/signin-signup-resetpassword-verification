import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import InputField from "../components/InputField";
import Alert from "../components/Alert";
import { FaSpinner } from "react-icons/fa";
import { validatePassword } from "../form/validate";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Clear errors if validation passes
    setPasswordError("");
    setConfirmPasswordError("");
    setError("");
    setIsLoading(true);
    setSuccessMessage("");
    // Validate only the password
    const passwordValidationError = validatePassword(password);
    if (passwordValidationError) {
      setIsLoading(false);
      setPasswordError(passwordValidationError);
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(`/api/auth/reset-password/${token}`, {
        password,
      });
      setSuccessMessage(response.data.message);
      // Navigate to login page upon success
      setTimeout(() => {
        navigate("/login"); // Redirect to login page
      }, 3000);
    } catch (error) {
      setError("Error resetting password.");
    } finally {
      setIsLoading(false);
    }
  };

  // Clear alert after 3 seconds
  useEffect(() => {
    if (error || successMessage) {
      const timer = setTimeout(() => {
        setError("");
        setSuccessMessage("");
        setIsLoading(false);
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
          <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
          <form onSubmit={handleSubmit}>
            <InputField
              label="New Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
            />
            <InputField
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={confirmPasswordError} // Display error if passwords do not match
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Resetting...
                </>
              ) : (
                "Reset Password"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
