import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (formData) => {
    const URL = "http://localhost:3000/account/signup";
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(URL, formData);
      dispatch({ type: "LOGIN", payload: response.data });
      setIsLoading(false);
      localStorage.setItem("user", JSON.stringify(response.data));
    } catch (error) {
      if (error.response.status === 400) {
        setError(error.response.data.error);
        setIsLoading(false);
        return;
      }
      console.error(error);
    }
  };
  return { error, isLoading, signup };
};
