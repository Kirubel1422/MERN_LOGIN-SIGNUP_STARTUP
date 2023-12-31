import { useState } from "react";
import { useSignup } from "../../../hooks/useSignup";
const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { isLoading, error, signup } = useSignup();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    signup(formData);
  };
  return (
    <div className="px-5 md:px-20 py-2 md:py-7  items-center flex-row md:flex justify-center gap-10 bg-slate-100">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold shadow-sm text-slate-600">
          SignUp Now
        </h1>
      </div>
      <form onSubmit={submitHandler} className="bg-slate-300 p-10 rounded-md">
        <div className="py-1 md:py-3">
          <div>
            <label htmlFor="email">Email:</label>
          </div>
          <div>
            <input
              type="email"
              name="email"
              className={`border-b-2 placeholder:text-sm transition-all duration-100 ease-linear outline-none w-full focus:border-slate-500 border-slate-400 bg-slate-50 rounded-sm px-2 py-2  ${
                error ? `border-red-600 text-red-600` : ``
              }`}
              onChange={changeHandler}
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="py-1 md:py-3">
          <div>
            <label htmlFor="password">Password:</label>
          </div>
          <div>
            <input
              type="password"
              name="password"
              className={`border-b-2 placeholder:text-sm transition-all duration-100 ease-linear outline-none w-full focus:border-slate-500 border-slate-400 bg-slate-50 rounded-sm px-2 py-2  ${
                error ? `border-red-600 text-red-600` : ``
              }`}
              onChange={changeHandler}
              placeholder="Enter a password"
            />
          </div>
        </div>
        <div className="py-1 md:py-3">
          <input
            type="submit"
            value="Signup"
            className="bg-slate-800 py-1 md:py-3 border-transparent w-full text-slate-200 tracking-wider shadow-slate-300 shadow-sm cursor-pointer hover:bg-slate-500 transition-all duration-400 ease-in"
            disabled={isLoading}
          />
        </div>
        {error && (
          <div className="text-red-500 border-2-red-500 text-center px-1 md:p-2 bg-red-100">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default Signup;
