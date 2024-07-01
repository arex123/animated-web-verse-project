import "./dashboard.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import Screen4 from "../../screens/screen4/Screen4";
import Screen5 from "../../screens/screen5/Screen5";
import Screen6 from "../../screens/screen6/Screen6";
import Screen7 from "../../screens/screen7/Screen7";
import Screen10 from "../../screens/screen10/Screen10";
import Screen9 from "../../screens/screen9/Screen9";
import Screen8 from "../../screens/screen8/Screen8";

gsap.registerPlugin(ScrollTrigger);

const Dashboard = () => {
  useEffect(() => {
    let cardH = window.screen.availHeight;
    let cardW = window.screen.availWidth;
    window.addEventListener("mousemove", (event) => {
      let centerX = 0 + cardW / 2;
      let centerY = 0 + cardH / 2;

      let mouseX = event.clientX - centerX;
      let mouseY = event.clientY - centerY;

      // console.log("x", mouseX, mouseY);

      let rotateX = (-1 * 15 * mouseY) / (cardH / 2);
      let rotateY = (15 * mouseX) / (cardW / 2);

      gsap.to(".back-img-hero1", {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
      });

      // let width = window.innerWidth,
      //   height = window.innerHeight,
      //   positionX = event.clientX / width - 0.55,
      //   positionY = event.clientY / height - 0.55;

      // gsap.to(".girl-img", {
      //   rotationX: -positionX * 18,
      //   rotationY: positionY * 18,
      //   // transformPerspective:1000,
      // });
    });

    // const card = document.querySelector(".card");

    // card.addEventListener("mousemove", cardMouseMove);

    // function cardMouseMove(event) {
    //   let cardH = card.offsetHeight;
    //   let cardW = card.offsetWidth;

    //   let centerX = card.offsetLeft + cardW / 2;
    //   let centerY = card.offsetTop + cardH / 2;

    //   let mouseX = event.clientX - centerX;
    //   let mouseY = event.clientY - centerY;

    //   console.log("x", mouseX, mouseY);

    //   let rotateX = (-1 * 15 * mouseY) / (cardH / 2);
    //   let rotateY = (15 * mouseX) / (cardW / 2);

    //   card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    // }

    const { innerHeight } = window;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".back-img-hero1",
        start: "0% 10%",
        end: "center 30%",
        scrub: true,
      },
    });

    tl.from(".back-img-hero-pic", {
      scale: 10,
      transformOrigin: "bottom 40%",
      duration: 1,
    });

    // console.log("innerHeight ", innerHeight);

    // paragraph animation onScroll
    let screen1TL = gsap.timeline({
      scrollTrigger: {
        trigger: ".screen-1",
        start: "10% 10%",
        end: "bottom 95%",
        markers: false,
        scrub: true,
      },
    });

    screen1TL.to(".screen-1", {
      opacity: 0,
      height: 0,
      display: "none",
    });

    // screen 2
    let screen2TL = gsap.timeline({
      scrollTrigger: {
        trigger: ".screen-2",
        start: "55vh top",
        end: "bottom 75%",
        markers: false,
        scrub: true,
      },
    });

    screen2TL.to(".screen-2", {
      display: "flex",
      opacity: 1,
    });

    gsap.fromTo(".w23Xvfvf",{
      yPercent: 100,
    },
     {
      scrollTrigger: {
        trigger: ".screen-2",
        start: "55vh top",
        end: "bottom 75%",
        markers: false,
        scrub: true,
      },
      yPercent: 0,
      opacity: 1,
    });
    gsap.to(".w23Xvfvd", {
      scrollTrigger: {
        trigger: ".screen-2",
        start: "55vh top",
        end: "bottom 75%",
        markers: false,
        scrub: true,
      },
      yPercent: -320,
      opacity: 1,
    });

    gsap.to(".img-desc_screen-2", {
      scrollTrigger: {
        trigger: ".screen-2",
        start: "55vh top",
        end: "bottom 75%",
        scrub: true,
      },
      yPercent: -50,
      opacity: 1,
    });

    gsap.fromTo(
      ".img_saviour_screen-2",
      {
        scale: 0.5,
        rotationY: 90,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".screen-2",
          start: "55vh top",
          end: "bottom 75%",
          scrub: true,
          markers: false,
        },
        transformOrigin: "left center",
        left: 0,
        scale: 1,
        rotationY: 0,
        opacity: 1,
      }
    );

    
    let screen3TL = gsap.timeline({
      scrollTrigger:{
        trigger: ".screen-3",
        start: "55vh center",
        end: "bottom 75%",
        scrub: true,
        markers: false,
      },

    })
  
    screen3TL.to('.w23Xvfvf',{
      yPercent:-400,
      opacity:0
    })
    screen3TL.to('.desc_screen-2',{
      opacity:0,
    },'<')

    screen3TL.to('.w23Xvfvd',{
      yPercent:-600,
      opacity:0
    },'<')
    screen3TL.to('.img-desc_screen-2',{
      yPercent:-100,
      opacity:0
    },'<')

    screen3TL.to('.screen-2-wrap',{
      opacity:0      
    },'<')

    screen3TL.to('.img_saviour_screen-2',{
      yPercent:-5,
      transformOrigin: "center center",
      rotationY:90,
      scale:0.7
    },'<')

    screen3TL.to('.screen-2',{
      display:'none'
    })



  }, []);

  return (
    <div className="dashboard">
      <div className="back-img-hero1">
        <img
          className="back-img-hero-pic"
          src="https://pbs.twimg.com/media/GP6D5CyXkAAIUKO?format=jpg&name=4096x4096"
          alt="img"
        />
        <div className="svfabjk-backside"></div>
      </div>
      <div className="screen-1">
        <p className="paragraph-1">
          KPR is a brand that focuses on collective narrative and empowering
          storytellers. Keepers is a living story, an uncharted world waiting to
          be explored, to be imagined.
        </p>
        <div className="paragraph-2">
          <p className="paragraph-2-keep">Keep.</p>
          <p className="paragraph-2-protect">protect.</p>
          <p className="paragraph-2-reimagine">reimagine.</p>
        </div>
      </div>

      <div className="screen-2">
        <div className="screen-2-wrap">
          <div className="title_screen-2">
            <h2>
              <div className="w23Xvfvf">
                <p className="index_title_screen-2">001</p>
                <span className="eravfdsc">A familiar world... Set</span>
              </div>
              <div className="w23Xvfvd">on a different path.</div>
            </h2>
          </div>

          <div className="desc_screen-2">
            <div className="img-desc_screen-2">
              <img
                className="img-img-desc_screen-2"
                src="./images/nature.jpeg"
                alt="bg-image-nature"
              />
            </div>
            <div className="text-desc_screen-2">
              Isolated within the New Eden safe zone, you witness humanity
              struggling to avoid descending into chaos.
            </div>
          </div>
        </div>
        <div className="saviour_screen-2">
          <div className="img_saviour_screen-2">
            <img
              className="img_img_saviour_screen-2"
              src="./images/nature.jpeg"
              alt="bg-image-nature"
            />
          </div>
        </div>
      </div>
      <div className="screen-3"></div>
      <Screen4/>
      <Screen5/>
      <Screen6/>
      <Screen7/>
      <Screen8/>
      <Screen9/>
      <Screen10/>
    </div>
  );
};

export default Dashboard;
