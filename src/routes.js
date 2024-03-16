/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Block from "views/Blockplayer";
import Changepass from "views/Changepass";
import Dashboard from "views/Dashboard.js";
import Analysis from "views/Analysis";
import Draw from "views/Gamedraw";
import Jokerlist from "views/Jokerlist";
import PlayerHistory from "views/PlayerHistory";
import Subadmin from "views/Subadmin";
import SuperAdmin from "views/Supderadmin";
import TodaySummary from "views/Todaysummary";
import TransferPoint from "views/TransferPoint";
import Changepintrans from "views/changetranspin";
import BasicExample from "views/genratepoint";
import ProfilePage from "views/profileadmin";
import Winning from "views/winninglist";
import Profit from "views/GameProfit";
import Turn from "views/TurnOver";
import Report from "views/PlayerReport";
import WeeklyReport from "views/WeeklyReport";
import TransferPointReport from "views/TransferReport";
import ComissionReport from "views/ComissionReport";
import GameProfit from "views/GameProfit";
import ContactUs from "views/ContactUs";
import Win from "views/Win";
import AdminBalance from "views/AdminBalance";
import Dis from "views/Distributer";
import Agent from "views/Agent";


// import Notifications from "views/Notifications.js";
// import Icons from "views/Icons.js";
// import Typography from "views/Typography.js";
// import TableList from "views/Tables.js";
// import Maps from "views/Map.js";
// import UserPage from "views/User.js";
// import UpgradeToPro from "views/Upgrade.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/Genratepoint",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <BasicExample />,
    layout: "/admin",
  },
  {
    path: "/Subadmin",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Subadmin />,
    layout: "/admin",
  },
  {
    path: "/Todaysummary",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <TodaySummary />,
    layout: "/admin",
  },
  {
    path: "/Profileadmin",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <ProfilePage />,
    layout: "/admin",
  },
  {
    path: "/TransferPoint",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <TransferPoint />,
    layout: "/admin",
  },
  {
    path: "/ChangePin_transiction",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Changepintrans />,
    layout: "/admin",
  },
  {
    path: "/PlayerHistory",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <PlayerHistory />,
    layout: "/admin",
  },
  {
    path: "/GameDraw",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Draw />,
    layout: "/admin",
  },
  {
    path: "/Jokerlist",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Jokerlist />,
    layout: "/admin",
  },
  {
    path: "/changepass",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Changepass />,
    layout: "/admin",
  },
  {
    path: "/block",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Block />,
    layout: "/admin",
  },
  {
    path: "/superadmin",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <SuperAdmin />,
    layout: "/admin",
  },
  {
    path: "/Analysis",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Analysis/>,
    layout: "/admin",
  },
  {
    path: "/Winning",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Winning/>,
    layout: "/admin",
  },
  {
    path: "/Balance",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Profit/>,
    layout: "/admin",
  },
  {
    path: "/TurnOver",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Turn/>,
    layout: "/admin",
  },
  {
    path: "/Report",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Report/>,
    layout: "/admin",
  },
  {
    path: "/WeeklyReport",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <WeeklyReport/>,
    layout: "/admin",
  },
  {
    path: "/TransferPointReport",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <TransferPointReport/>,
    layout: "/admin",
  },
  {
    path: "/ComissionReport",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <ComissionReport/>,
    layout: "/admin",
  },
  {
    path: "/GameProfit",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <GameProfit/>,
    layout: "/admin",
  },
  {
    path: "/ContactUs",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <ContactUs/>,
    layout: "/admin",
  },
  {
    path: "/Win",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Win/>,
    layout: "/admin",
  },
  {
    path: "/AdminBalance",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <AdminBalance/>,
    layout: "/admin",
  },
  {
    path: "/Dis",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Dis/>,
    layout: "/admin",
  },
  {
    path: "/Agent",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Agent/>,
    layout: "/admin",
  },
  {
    path: "/Player",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Agent/>,
    layout: "/admin",
  },
  
  
  
  
  
  
  
  
];
export default routes;
