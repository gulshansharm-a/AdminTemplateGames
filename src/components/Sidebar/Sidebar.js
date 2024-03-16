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
    { path: "/admin/dashboard", layout: {}, name: "Dashboard", icon: "dashboard" },
    { path: "/admin/Genratepoint", layout: generatePath, name: "generate Point", icon: "scoreboard" },
    { path: "/admin/superadmin", layout: maps, name: "Super Admin", icon: 'account_circle' },
    { path: "/admin/Subadmin", layout: maps, name: "View Admin list", icon: 'account_circle' },
    { path: "/admin/dis", layout: {}, name: "Distributor", icon: "settings_accessibility" },
    { path: "/admin/Agent", layout: maps, name: "Agent", icon: "person" },
    { path: "/admin/Player", layout: {}, name: "Players", icon: 'person' },
    { path: "/admin/Todaysummary", layout: {}, name: "Online player", icon: 'wifi' },
    { path: "/admin/Profileadmin", layout: maps, name: "Profile View", icon: 'face_5' },
    { path: "/admin/TransferPoint", layout: {}, name: "Transfer Point", icon: 'transfer_within_a_station' },
    { path: "/admin/ChangePin_transiction", layout: maps, name: "Change Transaction Pin", icon: 'key' },
    { path: "/admin/PlayerHistory", layout: {}, name: "Player History", icon: 'history' },
    { path: "/admin/GameDraw", layout: maps, name: "Game Draw", icon: 'history' },
    { path: "/admin/Jokerlist", layout: {}, name: "Joker List", icon: 'history' },
    { path: "/admin/Analysis", layout: maps, name: "Game Analysis", icon: 'history' },
    { path: "/admin/Winning", layout: {}, name: "Winnings List", icon: 'history' },
    { path: "/admin/Balance", layout: {}, name: "Balance List", icon: 'history' },
    { path: "/admin/TurnOver", layout: maps, name: "Turnover Report", icon: 'progress_activity' },
    { path: "/admin/Report", layout: {}, name: "Player Report", icon: 'progress_activity' },
    { path: "/admin/WeeklyReport", layout: maps, name: "Player Weekly Report", icon: 'progress_activity' },
    { path: "/admin/TransferPointReport", layout: {}, name: "Transfer Point Report", icon: 'money' },
    { path: "/admin/ComissionReport", layout: maps, name: "Commission Report", icon: 'money' },
    { path: "/admin/GameProfit", layout: {}, name: "Game Profit", icon: 'history' },
    { path: "/admin/ContactUs", layout: maps, name: "Contact Us", icon: 'call' },
    { path: "/admin/Win", layout: {}, name: "Winning %", icon: 'percent' },
    { path: "/admin/AdminBalance", layout: maps, name: "Admin Balance", icon: 'person' },
    
    { path: "/admin/changepass", layout: {}, name: "Change Password", icon: 'lock' },
    { path: "/admin/block", layout: maps, name: "Blocked Players", icon: 'block' },
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
