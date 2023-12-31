import { Link } from "react-router-dom";
import { useLogout } from "../../../hooks/useLogout";
import { useAuthContext } from "../../../hooks/useAuthContext";

const Nav = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };
  return (
    <>
      <header className="flex justify-between items-center px-5 md:px-20 py-2 md:py-7">
        <div>
          <span className="text-3xl text-slate-600 cursor-pointer font-bold">
            Kirubel's MERN App
          </span>
        </div>
        <div>
          {user && (
            <div className="flex gap-3 md:gap-5 items-center">
              <span className="ml-3">{user ? user.email : user}</span>
              <button
                type="button"
                onClick={handleClick}
                className="border-2 border-green-600 font-bold text-green-400 cursor-pointer px-2 py-1 rounded-md hover:bg-green-500 transition-all duration-200 ease-in hover:text-green-50"
              >
                Logout
              </button>
            </div>
          )}
          {!user && (
            <div>
              <ul className="flex justify-end items-center gap-1 md:gap-2">
                <li>
                  <Link
                    to="/signup"
                    className="text-green-600 bg-green-300 px-2 py-1 border-green-600 hover:bg-green-600 hover:text-green-50 rounded-md transition-all duration-300"
                  >
                    Signup
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="text-green-600 bg-green-300 px-2 py-1 border-green-600 hover:bg-green-600 hover:text-green-50 rounded-md transition-all duration-300"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Nav;
