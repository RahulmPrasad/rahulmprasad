import React from "react";
import Sidemenu from "../components/Sidebar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      
      {/* FIXED SIDE MENU */}
      <Sidebar />

      {/* MAIN CONTENT AREA */}
    </div>
  );
};

export default Dashboard;
