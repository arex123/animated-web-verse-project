import { useEffect } from "react";
import "./screen8.scss";
import gsap from "gsap";

import leftimg1 from "/cards/card-left-01.webp";
import leftimg2 from "/cards/card-left-02.webp";
import leftimg3 from "/cards/card-left-03.webp";
import leftimg4 from "/cards/card-left-04.webp";
import leftimg5 from "/cards/card-left-05.webp";

import rightimg1 from "/cards/card-right-01.webp";
import rightimg2 from "/cards/card-right-02.webp";
import rightimg3 from "/cards/card-right-03.webp";
import rightimg4 from "/cards/card-right-04.webp";
import rightimg5 from "/cards/card-right-05.webp";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Screen8 = () => {
  useEffect(() => {
    let screen8Tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".screen8",
        start: "top top",
        end: "bottom top",
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
      .to(
        ".back-img-hero-pic",
        {
          scale: 0.5,
          display: "none",
        },
        "<"
      )
      .to(
        ".split-images",
        {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        "<"
      )
  

    function cardTimelines() {
      let leftcardtl1 = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.4,
      });

      leftcardtl1
        .to(".left-img-1", {
          zIndex: 9,
          right: "-5%",
          opacity: 1,
          scale: 0.9,
        })
        .to(
          ".left-img-1",
          {
            zIndex: 8,
            right: "10%",
            scale: 0.8,
          },
          "+=0.4"
        )
        .to(
          ".left-img-1",
          {
            zIndex: 7,
            right: "25%",
            scale: 0.7,
          },
          "+=0.4"
        )
        .to(
          ".left-img-1",
          {
            zIndex: 6,
            right: "40%",
            scale: 0.6,
          },
          "+=0.4"
        )
        .to(
          ".left-img-1",
          {
            zIndex: 0,
            right: "55%",
            opacity: 0,
            scale: 0.5,
          },
          "+=0.4"
        )
        .to(
          ".left-img-1",
          {
            zIndex: 10,
            right: "-20%",
            // opacity:1,
            scale: 1,
          },
          "+=0.4"
        );

      let leftcardtl2 = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.4,
      });

      leftcardtl2
        .to(".left-img-2", {
          zIndex: 8,
          right: "10%",
          scale: 0.8,
        })
        .to(
          ".left-img-2",
          {
            zIndex: 7,
            right: "25%",
            scale: 0.7,
          },
          "+=0.4"
        )
        .to(
          ".left-img-2",
          {
            zIndex: 6,
            right: "40%",
            scale: 0.6,
          },
          "+=0.4"
        )
        .to(
          ".left-img-2",
          {
            zIndex: 0,
            right: "55%",
            opacity: 0,
            scale: 0.5,
          },
          "+=0.4"
        )
        .to(
          ".left-img-2",
          {
            zIndex: 10,
            // opacity:1,
            right: "-20%",
            scale: 1,
          },
          "+=0.4"
        )
        .to(
          ".left-img-2",
          {
            right: "-5%",
            opacity: 1,
            zIndex: 9,
            scale: 0.9,
          },
          "+=0.4"
        );

      let leftcardtl3 = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.4,
      });

      leftcardtl3
        .to(".left-img-3", {
          zIndex: 7,
          right: "25%",
          scale: 0.7,
        })
        .to(
          ".left-img-3",
          {
            zIndex: 6,
            right: "40%",
            scale: 0.6,
          },
          "+=0.4"
        )
        .to(
          ".left-img-3",
          {
            zIndex: 0,
            right: "55%",
            opacity: 0,
            scale: 0.5,
          },
          "+=0.4"
        )
        .to(
          ".left-img-3",
          {
            zIndex: 10,
            // opacity:1,
            right: "-20%",
            scale: 1,
          },
          "+=0.4"
        )
        .to(
          ".left-img-3",
          {
            right: "-5%",
            opacity: 1,
            zIndex: 9,
            scale: 0.9,
          },
          "+=0.4"
        )
        .to(
          ".left-img-3",
          {
            right: "10%",
            zIndex: 8,
            scale: 0.8,
          },
          "+=0.4"
        );

      let leftcardtl4 = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.4,
      });

      leftcardtl4
        .to(".left-img-4", {
          zIndex: 6,
          right: "40%",
          scale: 0.6,
        })
        .to(
          ".left-img-4",
          {
            zIndex: 0,
            right: "55%",
            opacity: 0,
            scale: 0.5,
          },
          "+=0.4"
        )
        .to(
          ".left-img-4",
          {
            zIndex: 10,
            // opacity:1,
            right: "-20%",
            scale: 1,
          },
          "+=0.4"
        )
        .to(
          ".left-img-4",
          {
            zIndex: 9,
            right: "-5%",
            opacity: 1,
            scale: 0.9,
          },
          "+=0.4"
        )
        .to(
          ".left-img-4",
          {
            zIndex: 8,
            right: "10%",
            scale: 0.8,
          },
          "+=0.4"
        )
        .to(
          ".left-img-4",
          {
            zIndex: 7,
            right: "25%",
            scale: 0.7,
          },
          "+=0.4"
        );

      let leftcardtl5 = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.4,
      });

      leftcardtl5
        .to(".left-img-5", {
          zIndex: 0,
          right: "55%",
          opacity: 0,
          scale: 0.5,
        })
        .to(
          ".left-img-5",
          {
            zIndex: 10,
            // opacity:1,
            right: "-20%",
            scale: 1,
          },
          "+=0.4"
        )
        .to(
          ".left-img-5",
          {
            zIndex: 9,
            opacity: 1,
            right: "-5%",
            scale: 0.9,
          },
          "+=0.4"
        )
        .to(
          ".left-img-5",
          {
            zIndex: 8,
            right: "10%",
            scale: 0.8,
          },
          "+=0.4"
        )
        .to(
          ".left-img-5",
          {
            zIndex: 7,
            right: "25%",
            scale: 0.7,
          },
          "+=0.4"
        )
        .to(
          ".left-img-5",
          {
            zIndex: 6,
            right: "40%",
            scale: 0.6,
          },
          "+=0.4"
        );

      let leftcardtl6 = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.4,
      });

      leftcardtl6
        .to(".left-img-6", {
          zIndex: 10,
          right: "-20%",
          scale: 1,
        })
        .to(
          ".left-img-6",
          {
            opacity: 1,
            zIndex: 9,
            right: "-5%",
            scale: 0.9,
          },
          "+=0.4"
        )
        .to(
          ".left-img-6",
          {
            zIndex: 8,
            right: "10%",
            scale: 0.8,
          },
          "+=0.4"
        )
        .to(
          ".left-img-6",
          {
            zIndex: 7,
            right: "25%",
            scale: 0.7,
          },
          "+=0.4"
        )
        .to(
          ".left-img-6",
          {
            zIndex: 6,
            right: "40%",
            scale: 0.6,
          },
          "+=0.4"
        )
        .to(
          ".left-img-6",
          {
            zIndex: 0,
            right: "55%",
            scale: 0.5,
            opacity: 0,
          },
          "+=0.4"
        );

      /*********************************** */
      /*********************************** */

      let rightcardtl1 = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.4,
      });

      rightcardtl1
        .to(".right-img-1", {
          zIndex: 9,
          left: "-5%",
          opacity: 1,
          scale: 0.9,
        })
        .to(
          ".right-img-1",
          {
            zIndex: 8,
            left: "10%",
            scale: 0.8,
          },
          "+=0.4"
        )
        .to(
          ".right-img-1",
          {
            zIndex: 7,
            left: "25%",
            scale: 0.7,
          },
          "+=0.4"
        )
        .to(
          ".right-img-1",
          {
            zIndex: 6,
            left: "40%",
            scale: 0.6,
          },
          "+=0.4"
        )
        .to(
          ".right-img-1",
          {
            zIndex: 0,
            left: "55%",
            opacity: 0,
            scale: 0.5,
          },
          "+=0.4"
        )
        .to(
          ".right-img-1",
          {
            left: "-20%",
            // opacity:1,
            zIndex: 10,
            scale: 1,
          },
          "+=0.4"
        );

      let rightcardtl2 = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.4,
      });

      rightcardtl2
        .to(".right-img-2", {
          zIndex: 8,
          left: "10%",
          scale: 0.8,
        })
        .to(
          ".right-img-2",
          {
            zIndex: 7,
            left: "25%",
            scale: 0.7,
          },
          "+=0.4"
        )
        .to(
          ".right-img-2",
          {
            zIndex: 6,
            left: "40%",
            scale: 0.6,
          },
          "+=0.4"
        )
        .to(
          ".right-img-2",
          {
            zIndex: 0,
            left: "55%",
            opacity: 0,
            scale: 0.5,
          },
          "+=0.4"
        )
        .to(
          ".right-img-2",
          {
            zIndex: 10,
            // opacity:1,
            left: "-20%",
            scale: 1,
          },
          "+=0.4"
        )
        .to(
          ".right-img-2",
          {
            left: "-5%",
            opacity: 1,
            zIndex: 9,
            scale: 0.9,
          },
          "+=0.4"
        );

      let rightcardtl3 = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.4,
      });

      rightcardtl3
        .to(".right-img-3", {
          zIndex: 7,
          left: "25%",
          scale: 0.7,
        })
        .to(
          ".right-img-3",
          {
            zIndex: 6,
            left: "40%",
            scale: 0.6,
          },
          "+=0.4"
        )
        .to(
          ".right-img-3",
          {
            zIndex: 0,
            left: "55%",
            opacity: 0,
            scale: 0.5,
          },
          "+=0.4"
        )
        .to(
          ".right-img-3",
          {
            // opacity:1,
            left: "-20%",
            zIndex: 10,
            scale: 1,
          },
          "+=0.4"
        )
        .to(
          ".right-img-3",
          {
            opacity: 1,
            zIndex: 9,
            left: "-5%",
            scale: 0.9,
          },
          "+=0.4"
        )
        .to(
          ".right-img-3",
          {
            zIndex: 8,
            left: "10%",
            scale: 0.8,
          },
          "+=0.4"
        );

      let rightcardtl4 = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.4,
      });

      rightcardtl4
        .to(".right-img-4", {
          zIndex: 6,
          left: "40%",
          scale: 0.6,
        })
        .to(
          ".right-img-4",
          {
            zIndex: 0,
            left: "55%",
            opacity: 0,
            scale: 0.5,
          },
          "+=0.4"
        )
        .to(
          ".right-img-4",
          {
            zIndex: 10,
            left: "-20%",
            scale: 1,
          },
          "+=0.4"
        )
        .to(
          ".right-img-4",
          {
            opacity: 1,
            zIndex: 9,
            left: "-5%",
            scale: 0.9,
          },
          "+=0.4"
        )
        .to(
          ".right-img-4",
          {
            zIndex: 8,
            left: "10%",
            scale: 0.8,
          },
          "+=0.4"
        )
        .to(
          ".right-img-4",
          {
            zIndex: 7,
            left: "25%",
            scale: 0.7,
          },
          "+=0.4"
        );

      let rightcardtl5 = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.4,
      });

      rightcardtl5
        .to(".right-img-5", {
          zIndex: 0,
          left: "55%",
          opacity: 0,
          scale: 0.5,
        })
        .to(
          ".right-img-5",
          {
            zIndex: 10,
            left: "-20%",
            scale: 1,
          },
          "+=0.4"
        )
        .to(
          ".right-img-5",
          {
            zIndex: 9,
            opacity: 1,
            left: "-5%",
            scale: 0.9,
          },
          "+=0.4"
        )
        .to(
          ".right-img-5",
          {
            zIndex: 8,
            left: "10%",
            scale: 0.8,
          },
          "+=0.4"
        )
        .to(
          ".right-img-5",
          {
            zIndex: 7,
            left: "25%",
            scale: 0.7,
          },
          "+=0.4"
        )
        .to(
          ".right-img-5",
          {
            zIndex: 6,
            left: "40%",
            scale: 0.6,
          },
          "+=0.4"
        );

      let rightcardtl6 = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.4,
      });

      rightcardtl6
        .to(".right-img-6", {
          zIndex: 10,
          left: "-20%",
          scale: 1,
        })
        .to(
          ".right-img-6",
          {
            zIndex: 9,
            opacity: 1,
            left: "-5%",
            scale: 0.9,
          },
          "+=0.4"
        )
        .to(
          ".right-img-6",
          {
            zIndex: 8,
            left: "10%",
            scale: 0.8,
          },
          "+=0.4"
        )
        .to(
          ".right-img-6",
          {
            zIndex: 7,
            left: "25%",
            scale: 0.7,
          },
          "+=0.4"
        )
        .to(
          ".right-img-6",
          {
            zIndex: 6,
            left: "40%",
            scale: 0.6,
          },
          "+=0.4"
        )
        .to(
          ".right-img-6",
          {
            zIndex: 0,
            left: "55%",
            scale: 0.5,
            opacity: 0,
          },
          "+=0.4"
        );

      /*********************************** */
      /*********************************** */
    }




    let contentBoxTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".screen8-content",
        start: "top 40%",
        end: "bottom top",
        // markers:true,
        scrub: true,
        // pin:true
      },
    })

    contentBoxTL.to('.screen8-content',{
      opacity:1,
    }).to('.screen8-content',{
      y:-250
    },'<').to('.split-images',{
      top:'60%'
    },'<')
    .to('.split-right',{
      width:"40vw"
    },'<').to('.split-left',{
      width:"40vw"
    },'<')
    // .to('.split-left',{
    //   width:'40vw'
    // },'<')

    //pinning at top
    let contentBoxTL1 = gsap.to('.screen8-content',{
      scrollTrigger: {
        trigger: ".screen8-content",
        start: "top 40%",
        end: "1000% top",
        markers:true,
        scrub: true,
        pin:true,
        // :cardTimelines
      },
      // y:-500
    })
   
    // let contentBoxTL2 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".screen8-content",
    //     start: "40% center",
    //     end: "bottom bottom",
    //     markers:true,
    //     scrub: true,
    //     onEnter:()=>{console.log("entering calling")},        
    //     // onLeave:()=>{console.log("leaving calling")}        
    //     onLeave:()=>{cardTimelines()}
    //   },
    // })
   


    

  }, []);
  return (
    <div className="screen8">
      {/* vfvf */}
      <div className="bg-expander1"></div>
      <div className="bg-expander2"></div>
      <div className="bg-expander3"></div>
      <div className="screen8-content-spacer"></div>
      <div className="screen8-content">
        <div className="pobhvh-left">
          <p>004</p>
          <p> 10,000 UNIQUE DIGITAL COLLECTIBLES.</p>
        </div>
        <div className="pobhvh-right">
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
          <div className="left-img-6"></div>
        </div>
        <div className="split-right">
          <div className="right-img-1"></div>
          <div className="right-img-2"></div>
          <div className="right-img-3"></div>
          <div className="right-img-4"></div>
          <div className="right-img-5"></div>
          <div className="right-img-6"></div>
        </div>
        {/* <img className="left1" src="./cards/card-left-01.webp" alt="" />
          <img className="left2" src="./cards/card-right-01.webp" alt="" /> */}
      </div>
    </div>
  );
};

export default Screen8;
