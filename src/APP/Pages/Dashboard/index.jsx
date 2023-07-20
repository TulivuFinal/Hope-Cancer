import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className=" h-screen w-screen">
      <div className="flex justify-evenly">
        <button
          className=" cursor-pointer"
          onClick={() => navigate("/dashboard")}
        >
          Doctors
        </button>
        <button
          className=" cursor-pointer"
          onClick={() => navigate("/dashboard/activites")}
        >
          Activites
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
