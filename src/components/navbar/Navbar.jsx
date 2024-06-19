import { useEffect, useState } from "react";
import "./navbar.scss";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
// import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(Observer);
gsap.registerPlugin(TextPlugin);

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
   
  }, [openSidebar]);

  const textScruble = (event) => {
    let currElement = event.target;
    // currElement.style.color="pink"doc
    console.log("hovered");

    let originalText = currElement.getAttribute("data");

    console.log("original text ", originalText);

    
    createInnerChildren()
   
    let elements = currElement.querySelector("span").querySelectorAll("span");
    
    
    for (let i = 0; i < elements.length; i++) {
      let mainTimeline = gsap.timeline({
        // repeat:-1 //infinite repeat
      })
      console.log("mainTimeline.isActive: ")
      let chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
      for(let k=0; k <= i+1; k++) {
        const timeline = gsap.timeline({});

        let replacement = chars[Math.floor(Math.random() * chars.length)]
        
        if(k==i+1) {
          replacement = originalText[i]
        }
        // console.log("replacement: ",k,i, replacement)

        timeline.to(
          elements[i],
          {
            text: replacement,
            duration: 0.1,
            // repeat: 1,
            // delay:0.2,
            // yoyo: true,
          },
          // 0
        );

        mainTimeline.add(timeline)
      }

    }

   

    function createInnerChildren(){

      if(currElement.children.length!=0) return;
      let newEle = document.createElement("span");
      
      for (let i = 0; i < originalText.length; i++) {
        let newTextElement = document.createElement("span");
        newTextElement.innerHTML = originalText[i];
        newEle.append(newTextElement);
      }
      currElement.innerHTML = "";
      currElement.append(newEle);
      
    }

    
  };
  return (
    <div className="navbar">
      <div className="sidebar">
        <div
          // onClick={() => setOpenSidebar(true)}
          className={`menu-open ${openSidebar ? "undoBorberHover" : ""}`}
        >
          <div onClick={() => setOpenSidebar(true)}>
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
            <div
              className={`sidebar-drawer ${
                openSidebar ? "sidebar-drawer-enable" : ""
              }`}
            >
              <div className="sidebar-drawer_left">
                <div>
                  <span className="discover-text-1"> <span onMouseEnter={textScruble} data="discover">DISCOVER</span></span>
                  <ul className="sidebar-menu">
                    <li><span className="side-menu-p"><span className="side-menu-" onMouseEnter={textScruble} data="story">Story</span></span></li>
                    <li><span className="side-menu-p"><span className="side-menu-" onMouseEnter={textScruble} data="protocol">protocol</span></span></li>
                    <li><span className="side-menu-p"><span className="side-menu-" onMouseEnter={textScruble} data="journal">journal</span></span></li>
                    <li><span className="side-menu-p"><span className="side-menu-" onMouseEnter={textScruble} data="media">media</span></span></li>
                    <li><span className="side-menu-p"><span className="side-menu-" onMouseEnter={textScruble} data="gallary">gallary</span></span></li>
                    <li><span className="side-menu-p"><span className="side-menu-" onMouseEnter={textScruble} data="about">about</span></span></li>
                  </ul>
                </div>
                <div>
                  <span className="discover-text-2"><span onMouseEnter={textScruble} data="connect" >Connect</span></span>
                  <ul className="connect-dis">
                    <li onMouseEnter={textScruble} data="twitter">Twitter</li>
                    <li onMouseEnter={textScruble} data="discord">Discord</li>
                  </ul>
                </div>
                <div>
                  <span className="discover-text-3"><span onMouseEnter={textScruble} data="buy on" >Buy on</span></span>
                  <ul className="connect-dis">
                    <li onMouseEnter={textScruble} data="Opensa">Opensa</li>
                  </ul>
                </div>
                <div>
                  <span>US-en</span>
                  <span className="connect-dis-date">@ 2022</span>
                </div>
              </div>
              <div className="sidebar-drawer_right">
                <div
                  onClick={() => setOpenSidebar(!openSidebar)}
                  className="sidebar-drawer_right_close-x"
                >
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
      <div className="topbar">
        {/* <div className="scrollWatch"></div> */}
      </div>
    </div>
  );
};

export default Navbar;
