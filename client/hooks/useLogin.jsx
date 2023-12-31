import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (formData) => {
    const URL = "http://localhost:3000/account/login";
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(URL, formData);
      dispatch({ type: "LOGIN", payload: response.data });
      localStorage.setItem("user", JSON.stringify(response.data));
      setIsLoading(false);
    } catch (error) {
      if (error.response.status === 400) {
        setError(error.response.data.error);
        setIsLoading(false);
        return;
      }
      console.error(error);
    }
  };
  return { error, isLoading, login };
};
