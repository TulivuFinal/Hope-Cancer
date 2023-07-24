import React, { useContext } from "react";
import APPCONTEXT from "../../Context/APP";

import { useNavigate } from "react-router-dom";

const Landing = () => {
  const { user, isLoggedIn } = useContext(APPCONTEXT);

  const navigate = useNavigate();

  function goToPortal() {
    if (isLoggedIn) {
      navigate("/dashboard");
      return;
    }

    navigate("/signin");
  }

  return (
    <div className=" w-screen h-screen">
      <div className=" p-8 flex w-full flex-row justify-between">
        <button
          onClick={goToPortal}
          className=" border-2 border-blue-50 active:opacity-20 rounded-xl"
        >
          To Portal
        </button>

        {/* <p>{user.name && user.name}</p> */}
        <ShowUser user={user} />
      </div>
    </div>
  );
};

const ShowUser = ({ user = {} }) => {
  if (user.name) {
    return <p>{user.name}</p>;
  }
  return null;
};

export default Landing;
