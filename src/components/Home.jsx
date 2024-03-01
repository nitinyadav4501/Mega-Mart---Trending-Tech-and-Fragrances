import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sections from "./Sections";
import { useApi } from "../context/context";
import { TbPerfume } from "react-icons/tb";
import { IoMdTrendingUp } from "react-icons/io";
import { FaMobileScreenButton } from "react-icons/fa6";
import { IoMdLaptop } from "react-icons/io";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function Home() {
  const [trendingProduct, setTrendingProduct] = useState([]);
  const [smartPhone, setSmartPhone] = useState([]);
  const [laptop, setLaptop] = useState([]);
  const [fragrances, setFragrances] = useState([]);
  const { data, loading } = useApi();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTrendingProduct(data.slice(2, 7));
    setSmartPhone(data.filter((e) => e.category === "smartphones").slice(0, 5));
    setLaptop(data.filter((e) => e.category === "laptops").slice(0, 5));
    setFragrances(data.filter((e) => e.category === "fragrances").slice(0, 5));
  }, [data]);

  return (
    <>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <>
            <Sections
              products={trendingProduct}
              bgColor="black"
              heading="TRENDING"
              icon={<IoMdTrendingUp />}
            />
            <Sections
              products={fragrances}
              heading="FRAGRANCES"
              icon={<TbPerfume />}
            />
            <Sections
              products={smartPhone}
              heading="SMARTPHONES"
              icon={<FaMobileScreenButton />}
            />
            <Sections
              products={laptop}
              heading="LAPTOPS"
              icon={<IoMdLaptop />}
            />
            <div className="w-fit mx-auto pb-6">
              <button className=" py-2 bg-black hover:bg-orange-500 text-white rounded-full px-4 font-bold">
                <Link to="/allProduct">View All Product</Link>
              </button>
            </div>
        </>
      )}
      <Footer />
    </>
  );
}

export default Home;
