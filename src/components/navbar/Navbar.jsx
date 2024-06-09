import { useState } from "react";
import "./navbar.scss";
const Navbar = () => {
  const [openSidebar,setOpenSidebar] = useState(false)
  return (
    <div className="navbar">
      <div className="sidebar">
        <div className="menu-open">
          <div>
            <svg
              width="28"
              height="8"
              viewBox="0 0 28 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="-0.75"
                x2="23.4856"
                y2="-0.75"
                transform="matrix(0.999967 -0.00807141 0.0039709 0.999992 0 7.18945)"
                stroke="#0D0C0C"
                stroke-width="1.5"
              />
              <line
                y1="1.25"
                x2="28"
                y2="1.25"
                stroke="#0F0F0F"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div onClick={()=>setOpenSidebar(true)} className="sidebar-drawer">
            <div className="sidebar-drawer_left">
              <div>
                <li className="discover-text">DISCOVER</li>
                <ul>
                  <li>Story</li>
                  <li>protocol</li>
                  <li>journal</li>
                  <li>media</li>
                  <li>gallary</li>
                  <li>about</li>
                </ul>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="sidebar-drawer__right"></div>
          </div>
        </div>
        <div className="sidebar-middle-icon">
          <svg
            width="48"
            height="75"
            viewBox="0 0 48 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.0039 25.5531V0.000567823"
              stroke="#0D0C0C"
              stroke-width="3.5"
            />
            <path
              d="M24.0098 74.3919V48.8394"
              stroke="#0D0C0C"
              stroke-width="3.5"
            />
            <path
              d="M27.748 25.458L27.7515 30.2442L27.6869 35.687"
              stroke="#0D0C0C"
              stroke-width="3.5"
            />
            <path
              d="M27.748 38.6104L27.7515 43.3966L27.6869 48.8393"
              stroke="#0D0C0C"
              stroke-width="3.5"
            />
            <path
              d="M20.2676 25.458L20.271 30.2442L20.2064 35.687"
              stroke="#0D0C0C"
              stroke-width="3.5"
            />
            <path
              d="M20.2676 38.6104L20.271 43.3966L20.2064 48.8393"
              stroke="#0D0C0C"
              stroke-width="3.5"
            />
            <path
              d="M47.9082 37.1484L28.891 37.1484"
              stroke="#0D0C0C"
              stroke-width="3.5"
            />
            <path
              d="M19.0176 37.1484L0.000392523 37.1484"
              stroke="#0D0C0C"
              stroke-width="3.5"
            />
          </svg>
        </div>
        <div className="sidebar-music-toggle">on</div>
      </div>
      <div className="topbar"></div>
    </div>
  );
};

export default Navbar;
