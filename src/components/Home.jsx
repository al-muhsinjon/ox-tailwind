import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar, Navbar,  Table } from ".";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // console.log(token);

  useEffect(() => {
    token === null || token === "undefined" ? navigate("/login") : navigate("/");
  }, []);
  return (
    <>
      <div>
       
        <div className="w-full h-full ">
        <div className="fixed w-full z-10 top-0">
        <Navbar />
          
        </div>
        <div className="w-full flex h-auto  bg-slate-700">
          <div className="w-[20%]  fixed top-0">
          <Sidebar />
            
          </div>
          <div className="w-[80%] ml-[20%] mt-20  pb-10 h-[auto] dark:bg-gray-800 bg-slate-200">
            
            <Table/>
          </div>
        </div>
      </div>
        
          
      </div>
    </>
  );
};

export default Home;
