import React, { useContext, useState, useEffect } from "react";

import useAxios from "../../../Hooks/useAxios";

import APPCONTEXT from "../../../Context/APP";

const Doctors = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(APPCONTEXT);
  const request = useAxios();

  useEffect(() => {
    fetchProperties();
  }, []);

  async function fetchProperties() {
    let res = await request({
      method: "GET",
      url: "property/user-id",
      params: {
        user_id: parseInt(user.id),
        id: 1,
      },
    });
    console.log(res);
    if (res === "error") {
      //ret error handling logic
      return;
    }
    setData(res);
  }

  console.log(data);

  return (
    <div>
      <h1>All Doctors</h1>
      {data.map((doc) => (
        <h1 key={doc.id}>{doc.name}</h1>
      ))}
    </div>
  );
};
export default Doctors;
