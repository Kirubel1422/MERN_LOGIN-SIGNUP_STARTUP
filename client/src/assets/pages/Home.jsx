import { useAuthContext } from "../../../hooks/useAuthContext";

const Home = () => {
  const { user } = useAuthContext();
  return (
    <div className="px-5 md:px-20 py-2 md:py-7">
      <h1 className="text-2xl md:text-3xl text-slate-600 font-bold">
        Welcome to Home Page
      </h1>
      {user && (
        <div className="pt-5 md:pt-10 text-slate-800">
          User: <span>{user.email}</span>
        </div>
      )}
    </div>
  );
};

export default Home;
