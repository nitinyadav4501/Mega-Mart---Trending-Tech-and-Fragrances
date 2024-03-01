import { createContext, useContext, useState, useEffect } from "react";

const myContext = createContext();

const Contextprovider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        let url = await fetch("https://dummyjson.com/products");
        let res = await url.json();
        setData(res.products);
      } catch (error) {
        console.log("failed to fetch data");
      }
      setLoading(false);
    };
    getData();
  }, []);

  return <myContext.Provider value={{data,loading}}>{children}</myContext.Provider>;
};

const useApi = () => {
  return useContext(myContext);
};

export { myContext, Contextprovider, useApi };
