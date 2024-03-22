
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

var routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "",
  },
  {
    path: "/Genratepoint",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <BasicExample />,
    layout: "",
  },
  {
    path: "/Subadmin",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Subadmin />,
    layout: "",
  },
  {
    path: "/Todaysummary",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <TodaySummary />,
    layout: "",
  },
  {
    path: "/Profileadmin",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <ProfilePage />,
    layout: "",
  },
  {
    path: "/TransferPoint",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <TransferPoint />,
    layout: "",
  },
  {
    path: "/ChangePin_transiction",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Changepintrans />,
    layout: "",
  },
  {
    path: "/PlayerHistory",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <PlayerHistory />,
    layout: "",
  },
  {
    path: "/GameDraw",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Draw />,
    layout: "",
  },
  {
    path: "/Jokerlist",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Jokerlist />,
    layout: "",
  },
  {
    path: "/changepass",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Changepass />,
    layout: "",
  },
  {
    path: "/block",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Block />,
    layout: "",
  },
  {
    path: "/superadmin",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <SuperAdmin />,
    layout: "",
  },
  {
    path: "/Analysis",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Analysis/>,
    layout: "",
  },
  {
    path: "/Winning",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Winning/>,
    layout: "",
  },
  {
    path: "/Balance",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Profit/>,
    layout: "",
  },
  {
    path: "/TurnOver",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Turn/>,
    layout: "",
  },
  {
    path: "/Report",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Report/>,
    layout: "",
  },
  {
    path: "/WeeklyReport",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <WeeklyReport/>,
    layout: "",
  },
  {
    path: "/TransferPointReport",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <TransferPointReport/>,
    layout: "",
  },
  {
    path: "/ComissionReport",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <ComissionReport/>,
    layout: "",
  },
  {
    path: "/GameProfit",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <GameProfit/>,
    layout: "",
  },
  {
    path: "/ContactUs",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <ContactUs/>,
    layout: "",
  },
  {
    path: "/Win",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Win/>,
    layout: "",
  },
  {
    path: "Balance",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <AdminBalance/>,
    layout: "",
  },
  {
    path: "/Dis",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Dis/>,
    layout: "",
  },
  {
    path: "/Agent",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Agent/>,
    layout: "",
  },
  {
    path: "/Player",
    name: "Genratepoint",
    icon: "nc-icon nc-bank",
    component: <Agent/>,
    layout: "",
  },
  
  
  
  
  
  
  
  
];
export default routes;
