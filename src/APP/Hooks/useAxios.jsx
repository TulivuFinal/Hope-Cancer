import React, { useContext } from "react";
import axios from "axios";

import APPCONTEXT from "../Context/APP";

const baseUrl = "https://api.v6.tuliaresidency.com";

const useAxios = () => {
  const { token } = useContext(APPCONTEXT);

  return async (obj) => {
    try {
      const { headers, method, data, url, params } = obj;
      let res = await axios({
        headers: { Authorization: `Bearer ${token}`, ...headers },
        method: method,
        url: `${baseUrl}/${url}`,
        data: data,
        params: params,
      });

      return res.data;
    } catch (e) {
      alert(e.message);
      return "error";
    }
  };
};

export default useAxios;
