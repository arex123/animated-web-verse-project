import { useEffect } from "react";
import "./screen8.scss";
import gsap from "gsap";

const Screen8 = () => {
  useEffect(() => {
    // gsap.fromTo(
    //   ".back-img-hero-pic",
    //   {
    //     scale: 2,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: ".screen8",
    //       start: "top top",
    //       end: "bottom center",
    //       // pin:true,
    //       markers: true,
    //       scrub: 1,
    //     },
    //     scale: 1,
    //   }
    // );
    // gsap.to(
    //   ".back-img-hero-pic",
    //   {
    //     scrollTrigger: {
    //       trigger: ".screen8",
    //       start: "top 5%",
    //       end: "bottom center",
    //       // pin:true,
    //       markers: true,
    //       scrub: true,
    //     },
    //     duration:3,
    //     scale: 5,
    //   }
    // );
    let screen8Tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".screen8",
        start: "top top",
        end: "bottom top",
        // pin:true,
        // markers: true,
        scrub: 1,
      },
    });

    screen8Tl
      .to(".bg-expander1", {
        display: "block",
        duration: 3,
        scale: 50,
        transformOrigin: "center center",
      })
      .to(
        ".back-img-hero-pic",
        {
          scale: 1,
        },
        "<"
      )

      .to(
        ".bg-expander2",
        {
          display: "block",
          scale: 50,
          duration: 3,
          delay: 2,
          transformOrigin: "center center",
        },
        "<"
      )
      .to(
        ".bg-expander3",
        {
          display: "block",
          scale: 50,
          delay: 2,
          duration: 3,
          transformOrigin: "center center",
        },
        "<"
      )
      .to(".back-img-hero-pic", {
        scale: 1,
        display:'none'
      },'<')
      .to(".split-images", {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      },'<');


  }, []);
  return (
    <div className="screen8">
      {/* vfvf */}
      <div className="bg-expander1"></div>
      <div className="bg-expander2"></div>
      <div className="bg-expander3"></div>
      <div className="screen8-content">
        <div>
          <p>004</p>
          <p> 10,000 UNIQUE DIGITAL COLLECTIBLES.</p>
        </div>
        <div>
          <p>INITIAL COLLECTION</p>
          <p>
            Every Keeper is born, endowed with attributes from a collection of
            over 400 meticulously hand-painted assets. They are personable,
            iconic possessions that represent KPR's foundational pillars of
            evolution, inclusion, and imagination.
          </p>
        </div>
      </div>

      <div className="split-images"> 
        <div className="split-left">
          <div className="left-img-1"></div>
          <div className="left-img-2"></div>
          <div className="left-img-3"></div>
          <div className="left-img-4"></div>
          <div className="left-img-5"></div>
        </div>
        <div className="split-right">
          <div className="right-img-1"></div>
          <div className="right-img-2"></div>
          <div className="right-img-3"></div>
          <div className="right-img-4"></div>
          <div className="right-img-5"></div>
        </div>
          {/* <img className="left1" src="./cards/card-left-01.webp" alt="" />
          <img className="left2" src="./cards/card-right-01.webp" alt="" /> */}
      </div>
    </div>
  );
};

export default Screen8;
