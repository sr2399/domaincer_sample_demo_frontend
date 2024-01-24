import React, { useEffect, useState, useRef } from "react";

import { Route, Routes, useParams } from "react-router-dom";
import { useTheme, createStyles, makeStyles } from '@mui/styles';
import { Typography } from "@mui/material";
import './dashBoard.css';
import GLogout from "../../../Auth/logout";

const useStyles = makeStyles((theme: any) =>
  createStyles({
    componentroot: {
      display: 'flex',
      // overflow: 'hidden',
    },
    content: {
      height: '100%',
      overflow: 'auto',
      flexGrow: 1,
      marginTop: '64px',
      // backgroundColor: theme.palette.background.default,
      padding: '5px',
    },
    root: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
  }),
);







const DashBoardScreen =(props:any)=>{
  const [userData, setUserData] = useState([]);
  const [activeSection, setActiveSection] = useState('Dashboard');
  console.log("PROPPSS-DASHBOARD", props)



  const Sidebar = ({activeSection, setActiveSection}:any) => {
    const sections = ['Dashboard', 'Users', 'Settings'];
  
    return (
      <div className="sidebar">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`sidebar-item ${activeSection === section ? 'active' : ''}`}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </div>
        ))}
      </div>
    );
  };
  
  const DashboardSection = ({title}:any) => (
    <div className="dashboard-section">
      <Typography variant="h2">{title}</Typography>

    </div>
  );


  return (
    <div className="app">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="main-content">
        <DashboardSection title={activeSection} />
      </div>
      <GLogout />
    </div>
  );

}


export default DashBoardScreen