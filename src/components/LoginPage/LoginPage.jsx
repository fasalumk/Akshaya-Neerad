import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setIsLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState(""); // Track username input
  const [password, setPassword] = useState(""); // Track password input
  const [errorMessage, setErrorMessage] = useState(""); // Track error message
  const [failedAttempts, setFailedAttempts] = useState(0); // Track the number of failed attempts
  const [fadeIn, setFadeIn] = useState(false); // Track fade-in state
  const [fadeOut, setFadeOut] = useState(false); // Track fade-out state
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Get the username and password from environment variables
    const validUsername = import.meta.env.REACT_APP_VALID_USERNAME;
    const validPassword = import.meta.env.REACT_APP_VALID_PASSCODE;
  
    if (username === validUsername && password === validPassword) {
      setIsLoggedIn(true);
      setErrorMessage(""); // Clear any previous error
      setFailedAttempts(0); // Reset failed attempts counter
      // Navigate to the dashboard with success message
      navigate("/admin/dashboard", { state: { message: "Logged in successfully" } });
    } else {
      setFailedAttempts((prev) => prev + 1); // Increase the failed attempts count
      setErrorMessage("Invalid username or password"); // Show error message
    }
  };
  

  useEffect(() => {
    if (errorMessage) {
      // Trigger fade-in when the error message appears
      setFadeIn(true);

      const timer = setTimeout(() => {
        // Trigger fade-out after 2 seconds
        setFadeOut(true);

        // Hide the error message after fade-out is complete
        setTimeout(() => {
          setErrorMessage(""); // Clear the error message after 2 seconds
          setFadeIn(false); // Reset fade-in state
          setFadeOut(false); // Reset fade-out state
        }, 1000); // Wait for fade-out to complete before hiding the message
      }, 2000); // Show the error message for 2 seconds

      return () => clearTimeout(timer); // Clean up timer
    }
  }, [errorMessage]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative">
      {/* Error Message Box */}
      {errorMessage && (
        <div
          className={`absolute top-0 rounded-lg h-10 w-80 bg-red-500 text-white text-center py-3 z-50 flex items-center justify-center space-x-2 transform transition-all duration-1000 ease-in-out ${
            fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-50px]"
          } ${fadeOut ? "opacity-0" : ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#ffffff"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.522 0-10-4.478-10-10S6.478 2 12 2s10 4.478 10 10-4.478 10-10 10zm-1-15h2v6h-2zm0 8h2v2h-2z" />
          </svg>
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Logo */}
      <div className="text-4xl text-gray-900 font-bold mb-8">ADMIN</div>

      {/* Login Form */}
      <div className="w-80 bg-white p-6 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-gray-900 text-lg mb-4">Log in with your username</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update username state
              className="w-full px-4 py-2 bg-gray-100 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              className="w-full px-4 py-2 bg-gray-100 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Eye Icon */}
            <div
              className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#000000"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.137 15.147c-.71-.857-1.146-1.947-1.146-3.147 0-2.76 2.241-5 5-5 1.201 0 2.291.435 3.148 1.145l1.897-1.897c-1.441-.738-3.122-1.248-5.035-1.248-6.115 0-10.025 5.355-10.842 6.584.529.834 2.379 3.527 5.113 5.428l1.865-1.865zm6.294-6.294c-.673-.53-1.515-.853-2.44-.853-2.207 0-4 1.792-4 4 0 .923.324 1.765.854 2.439l5.586-5.586zm7.56-6.146l-19.292 19.293-.708-.707 3.548-3.548c-2.298-1.612-4.234-3.885-5.548-6.169 2.418-4.103 6.943-7.576 12.01-7.576 2.065 0 4.021.566 5.782 1.501l3.501-3.501.707.707zm-2.465 3.879l-.734.734c2.236 1.619 3.628 3.604 4.061 4.274-.739 1.303-4.546 7.406-10.852 7.406-1.425 0-2.749-.368-3.951-.938l-.748.748c1.475.742 3.057 1.19 4.699 1.19 5.274 0 9.758-4.006 11.999-8.436-1.087-1.891-2.63-3.637-4.474-4.978zm-3.535 5.414c0-.554-.113-1.082-.317-1.562l.734-.734c.361.69.583 1.464.583 2.296 0 2.759-2.24 5-5 5-.832 0-1.604-.223-2.295-.583l.734-.735c.48.204 1.007.318 1.561.318 2.208 0 4-1.792 4-4z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#000000"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" />
                </svg>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Log in
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="text-gray-500 text-xs mt-8">© 2024 Akshaya Neerad</footer>
    </div>
  );
};

export default LoginPage;
