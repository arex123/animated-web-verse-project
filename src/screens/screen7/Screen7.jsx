import { useEffect } from "react";
import "./screen7.scss";
import gsap from "gsap";
import CrystalVideo from "/videos/crystal.webm";

import "../../styles/fonts.css";

const Screen7 = () => {
  useEffect(() => {
    const timeline_01 = gsap.timeline({
      scrollTrigger: {
        trigger: ".screen7",
        start: "center 25%",
        end: "bottom 25%",
        // markers: true,
        scrub: true,
        pin: true,
      },
    });
    const timeline_02 = gsap.timeline({
      scrollTrigger: {
        trigger: ".leftText-screen7-10k",
        start: "center 65%",
        end: "bottom 80%",
        markers: false,
        scrub: true,
      },
    });

    for (let i = 1; i <= 10; i++) {
      timeline_02.to(".leftText-screen7-10k", {
        text: `${String(i).padStart(2, "0")}K`,
      });
    }

    gsap.fromTo(
      ".eye-view-img",
      {
        height: "40%",
      },
      {
        scrollTrigger: {
          trigger: ".eye-view-img",
          start: "center 85%",
          end: "bottom center",
          // markers: true,
          scrub: true,
        },
        height: "100%",
      }
    );

    let nextCards = gsap.timeline({
      scrollTrigger: {
        trigger: ".screen7",
        start: "70% 50%",
        end: "80% center",
        markers: true,
        scrub: true,
      },
    })

    nextCards.to('.screen7',{
      opacity: 0
    })


  }, []);

  return (
    <div className="screen7">
      <span className="leftText-screen7">
        <div className="qpowi-inner">
          <p className="leftText-screen7-10k">00K</p>
          <p className="post-leftText-screen7-10k">
            &#9658; &#9658; Initial collection
          </p>
        </div>
      </span>

      {/* <div ></div> */}
      {/* <hr className="screen7-hl" /> */}
      <div className="rightText-screen7">
        <p className="text-with-bullet">Kai cristal</p>
        <div className="crystal-view">
          <svg
            width="258"
            height="250"
            className="svg_crystal-view"
            viewBox="0 0 258 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line opacity="0.2" y1="43.5" x2="227" y2="43.5" stroke="black" />
            <line opacity="0.2" y1="0.5" x2="227" y2="0.5" stroke="black" />
            <line opacity="0.2" y1="87.5" x2="227" y2="87.5" stroke="black" />
            <line opacity="0.2" y1="129.5" x2="227" y2="129.5" stroke="black" />
            <line opacity="0.2" y1="172.5" x2="227" y2="172.5" stroke="black" />
            <line opacity="0.2" y1="259.5" x2="227" y2="259.5" stroke="black" />
            <line opacity="0.2" y1="216.5" x2="227" y2="216.5" stroke="black" />
            <line
              x1="239"
              y1="259.6"
              x2="256.589"
              y2="259.6"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="244.973"
              y1="238.022"
              x2="257.481"
              y2="238.022"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="255.061"
              x2="256.364"
              y2="255.061"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="233.467"
              x2="256.364"
              y2="233.467"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="251.077"
              x2="256.364"
              y2="251.077"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="228.928"
              x2="256.364"
              y2="228.928"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="246.537"
              x2="256.364"
              y2="246.538"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="224.952"
              x2="256.364"
              y2="224.952"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="241.991"
              x2="256.364"
              y2="241.991"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="220.405"
              x2="256.364"
              y2="220.405"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="239"
              y1="216.428"
              x2="256.589"
              y2="216.428"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="244.973"
              y1="194.85"
              x2="257.481"
              y2="194.85"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="211.889"
              x2="256.364"
              y2="211.889"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="190.311"
              x2="256.364"
              y2="190.311"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="207.912"
              x2="256.364"
              y2="207.913"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="185.764"
              x2="256.364"
              y2="185.764"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="203.373"
              x2="256.364"
              y2="203.373"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="181.787"
              x2="256.364"
              y2="181.788"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="198.827"
              x2="256.364"
              y2="198.827"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="177.241"
              x2="256.364"
              y2="177.241"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="239"
              y1="173.272"
              x2="256.589"
              y2="173.272"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="244.973"
              y1="151.678"
              x2="257.481"
              y2="151.678"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="168.717"
              x2="256.364"
              y2="168.717"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="147.139"
              x2="256.364"
              y2="147.139"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="164.748"
              x2="256.364"
              y2="164.748"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="142.6"
              x2="256.364"
              y2="142.6"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="160.202"
              x2="256.364"
              y2="160.202"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="138.616"
              x2="256.364"
              y2="138.616"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="155.655"
              x2="256.364"
              y2="155.655"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="134.077"
              x2="256.364"
              y2="134.077"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="239"
              y1="130.1"
              x2="256.589"
              y2="130.1"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="244.973"
              y1="108.522"
              x2="257.481"
              y2="108.522"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="125.561"
              x2="256.364"
              y2="125.561"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="103.967"
              x2="256.364"
              y2="103.967"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="121.577"
              x2="256.364"
              y2="121.577"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="99.4281"
              x2="256.364"
              y2="99.4281"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="117.037"
              x2="256.364"
              y2="117.037"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="95.4516"
              x2="256.364"
              y2="95.4516"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="112.491"
              x2="256.364"
              y2="112.491"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="90.9125"
              x2="256.364"
              y2="90.9125"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="239"
              y1="86.9281"
              x2="256.589"
              y2="86.9281"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="244.973"
              y1="65.35"
              x2="257.481"
              y2="65.35"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="82.3891"
              x2="256.364"
              y2="82.3891"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="60.8109"
              x2="256.364"
              y2="60.8109"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="78.4125"
              x2="256.364"
              y2="78.4125"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="56.2641"
              x2="256.364"
              y2="56.2641"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="73.8656"
              x2="256.364"
              y2="73.8656"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="52.2875"
              x2="256.364"
              y2="52.2875"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="69.3266"
              x2="256.364"
              y2="69.3266"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="47.7406"
              x2="256.364"
              y2="47.7406"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="239"
              y1="43.7719"
              x2="256.589"
              y2="43.7719"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="244.973"
              y1="22.1859"
              x2="257.481"
              y2="22.1859"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="39.2172"
              x2="256.364"
              y2="39.2172"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="17.6391"
              x2="256.364"
              y2="17.6391"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="35.2484"
              x2="256.364"
              y2="35.2484"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="13.1"
              x2="256.364"
              y2="13.1"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="30.7016"
              x2="256.364"
              y2="30.7016"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="9.12344"
              x2="256.364"
              y2="9.12344"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="26.1625"
              x2="256.364"
              y2="26.1625"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="248.547"
              y1="4.57656"
              x2="256.364"
              y2="4.57656"
              stroke="black"
              stroke-width="0.8"
            />
            <line
              x1="239"
              y1="0.6"
              x2="256.589"
              y2="0.6"
              stroke="black"
              stroke-width="0.8"
            />
          </svg>
          <video id="crystalVideo" autoPlay muted loop>
            <source src={CrystalVideo} type="video/webm" />
          </video>
        </div>
        <div className="eye-view">
          <img className="eye-view-img" src="./images/eye-img.webp" alt="" />
          <p className="eye-view-text">windows to the soul</p>
          {/* <p className="hidding-box"></p> */}
        </div>
      </div>
    </div>
  );
};

export default Screen7;
