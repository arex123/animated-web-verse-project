import { useState } from "react";
import "./navbar.scss";
const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  console.log(openSidebar)

  function calling(){
    console.log("hi")
  }
  return (
    <div className="navbar">
      <div className="sidebar">
        <div onClick={() => setOpenSidebar(!openSidebar)} className={`menu-open ${openSidebar?'undoBorberHover':''}`} >
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
          {openSidebar && (
            <div className={`sidebar-drawer ${openSidebar?'sidebar-drawer-enable':''}`}>
              <div className="sidebar-drawer_left">
                <div>
                  <span className="discover-text-1">DISCOVER</span>
                  <ul className="sidebar-menu">
                    <li>Story</li>
                    <li>protocol</li>
                    <li>journal</li>
                    <li>media</li>
                    <li>gallary</li>
                    <li>about</li>
                  </ul>
                </div>
                <div>
                  <span className="discover-text-2">Connect</span>
                  <ul className="connect-dis">
                    <li>Twitter</li>
                    <li>Discord</li>
                  </ul>
                </div>
                <div>
                  <span className="discover-text-3">Buy on</span>
                  <ul className="connect-dis">
                    <li>Opensa</li>
                  </ul>
                </div>
                <div>
                  <span>US-en</span>
                  <span className="connect-dis-date">@ 2022</span>
                </div>
              </div>
              <div className="sidebar-drawer_right">
                <div onClick={() => setOpenSidebar(!openSidebar)} className="sidebar-drawer_right_close-x">
                  <span id="cross-line-1"></span>
                  <span id="cross-line-2"></span>
                </div>
                <div className="sidebar-drawer_right_middle-icon">                  
                  <svg
                    width="48"
                    height="75"
                    viewBox="0 0 48 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.0039 25.5531V0.000567823"
                      stroke="#FFFCFC"
                      stroke-width="3.5"
                    />
                    <path
                      d="M24.0098 74.3919V48.8394"
                      stroke="#FFFCFC"
                      stroke-width="3.5"
                    />
                    <path
                      d="M27.748 25.458L27.7515 30.2442L27.6869 35.687"
                      stroke="#FFFCFC"
                      stroke-width="3.5"
                    />
                    <path
                      d="M27.748 38.6104L27.7515 43.3966L27.6869 48.8393"
                      stroke="#FFFCFC"
                      stroke-width="3.5"
                    />
                    <path
                      d="M20.2676 25.458L20.271 30.2442L20.2064 35.687"
                      stroke="#FFFCFC"
                      stroke-width="3.5"
                    />
                    <path
                      d="M20.2676 38.6104L20.271 43.3966L20.2064 48.8393"
                      stroke="#FFFCFC"
                      stroke-width="3.5"
                    />
                    <path
                      d="M47.9082 37.1484L28.891 37.1484"
                      stroke="#FFFCFC"
                      stroke-width="3.5"
                    />
                    <path
                      d="M19.0176 37.1484L0.000392523 37.1484"
                      stroke="#FFFCFC"
                      stroke-width="3.5"
                    />
                  </svg>
                </div>
                <div className="sidebar-drawer_right_close_music-toggle">
                  on
                </div>
              </div>
            </div>
          )}
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
