import React from "react";
import { Link, NavLink, generatePath, useLocation } from "react-router-dom";
import { Nav } from "reactstrap";
import PerfectScrollbar from "perfect-scrollbar";
import routes from "routes";
import logo from "download.jpeg";
import maps from '../../views/Map'; // Adjust the path according to your project structure

var ps;
<span class="material-symbols-outlined">
  dashboard
</span>

function Sidebar(props) {
  const location = useLocation();
  const myRoutes = [
    { path: "/", layout: {}, name: "Dashboard", icon: "dashboard" },
    { path: "/Genratepoint", layout: generatePath, name: "generate Point", icon: "scoreboard" },
    { path: "/superadmin", layout: maps, name: "Super Admin", icon: 'account_circle' },
    { path: "/Subadmin", layout: maps, name: "View Admin list", icon: 'account_circle' },
    { path: "/dis", layout: {}, name: "Distributor", icon: "settings_accessibility" },
    { path: "/Agent", layout: maps, name: "Agent", icon: "person" },
    { path: "/Player", layout: {}, name: "Players", icon: 'person' },
    { path: "/Todaysummary", layout: {}, name: "Online player", icon: 'wifi' },
    { path: "/Profileadmin", layout: maps, name: "Profile View", icon: 'face_5' },
    { path: "/TransferPoint", layout: {}, name: "Transfer Point", icon: 'transfer_within_a_station' },
    { path: "/ChangePin_transiction", layout: maps, name: "Change Transaction Pin", icon: 'key' },
    { path: "/PlayerHistory", layout: {}, name: "Player History", icon: 'history' },
    { path: "/GameDraw", layout: maps, name: "Game Draw", icon: 'history' },
    { path: "/Jokerlist", layout: {}, name: "Joker List", icon: 'history' },
    { path: "/Analysis", layout: maps, name: "Game Analysis", icon: 'history' },
    { path: "/Winning", layout: {}, name: "Winnings List", icon: 'history' },
    { path: "/Balance", layout: {}, name: "Balance List", icon: 'history' },
    { path: "/TurnOver", layout: maps, name: "Turnover Report", icon: 'progress_activity' },
    { path: "/Report", layout: {}, name: "Player Report", icon: 'progress_activity' },
    { path: "/WeeklyReport", layout: maps, name: "Player Weekly Report", icon: 'progress_activity' },
    { path: "/TransferPointReport", layout: {}, name: "Transfer Point Report", icon: 'money' },
    { path: "/ComissionReport", layout: maps, name: "Commission Report", icon: 'money' },
    { path: "/GameProfit", layout: {}, name: "Game Profit", icon: 'history' },
    { path: "/ContactUs", layout: maps, name: "Contact Us", icon: 'call' },
    { path: "/Win", layout: {}, name: "Winning %", icon: 'percent' },
    { path: "/AdminBalance", layout: maps, name: "Admin Balance", icon: 'person' },
    
    { path: "/changepass", layout: {}, name: "Change Password", icon: 'lock' },
    { path: "/block", layout: maps, name: "Blocked Players", icon: 'block' },
    { path: "/home", layout: {}, name: "Logout", icon: 'logout' },

    // Add more routes as needed
  ];

  const sidebar = React.useRef();

  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  React.useEffect(() => {


    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  }, []);

  return (

    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <div className="logo">
        <a
          href="https://www.creative-tim.com"
          className="simple-text logo-mini"
        >
          <div className="logo-img">
            <img src={logo} alt="react-logo" />
          </div>
        </a>
        <a
          href="https://www.creative-tim.com"
          className="simple-text logo-normal"
        >
          Amacle Game
        </a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav >
          <p style={{ paddingLeft: '20px', color: 'white', fontSize: '1.2rem' }}>Dashboard</p>
          {myRoutes.map((prop, key) => (
            <>
              <li
                className={activeRoute(prop.path) + (prop.pro ? " active-pro" : "")}
                key={key}
              >
                <NavLink to={prop.path} className="nav-NavLink" style={{ display: 'flex', alignItems: 'center' }}> {/* Adjusted NavLink */}
                  <span className="material-symbols-outlined" style={{ color: '#FBBC06', marginRight: '16px', fontWeight: 'bolder' }}>{prop.icon}</span>
                  <p style={{ fontSize: '0.7rem' }}><Link to={prop.path}>{prop.name}</Link></p>
                </NavLink>
              </li>
              {key === 1 && <p style={{ paddingLeft: '20px', color: 'white', fontSize: '1.2rem', marginTop: '20px' }}>Management</p>} {/* Add <h4> tag after second map index */}
              {key === 9 && <p style={{ paddingLeft: '20px', color: 'white', fontSize: '1.2rem', marginTop: '20px' }}>Reports</p>} {/* Add <h4> tag after second map index */}

            </>
          ))}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
