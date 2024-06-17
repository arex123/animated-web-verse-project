import { useEffect } from "react";
import "./screen4.scss";
import { useGsap } from "../../gsapContext";
import WavesVideo from "../../../public/videos/topo-landing.webm";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(TextPlugin);

const Screen4 = () => {
  const { createTimeline } = useGsap();

  useEffect(() => {
    const timeline = createTimeline(
      {
        scrollTrigger: {
          trigger: ".screen4",
          start: "top 140%",
          end: "bottom bottom",
          markers: true,
          scrub: true,
        },
      },
    );

    timeline
      .to(".back-img-hero-pic", {
        scale: 5,
        rotationY: -180,
        yPercent: -100,
        transformOrigin: "center center",
      })
      .to(
        ".svfabjk-backside",
        {
          scale: 15,
          rotationY: 0,
          yPercent: -100,
          transformOrigin: "center center",
        },
        "<"
      );

    timeline.to(".screen4", {
      opacity: 1,
    },'<');


    gsap.fromTo('.line1-box-vfafbdf',{
      yPercent:50,
      opacity:0
    },{
      scrollTrigger:{
        trigger: ".box-vfafbdf-1",
        start: "top 55%",
        end: "bottom 65%",
        markers: false,
        scrub: true,
      },
      yPercent:0,
      opacity:1
    },'<')
   
    gsap.fromTo('.line2-box-vfafbdf',{
      yPercent:100,
      opacity:0
    },{
      scrollTrigger:{
        trigger: ".box-vfafbdf-1",
        start: "top 55%",
        end: "bottom 65%",
        markers: false,
        scrub: true,
      },
      yPercent:0,
      opacity:1
    },'<')

    gsap.fromTo('.line3-box-vfafbdf',{
      yPercent:200,
      opacity:0
    },{
      scrollTrigger:{
        trigger: ".box-vfafbdf-1",
        start: "top 55%",
        end: "bottom 65%",
        markers: false,
        scrub: true,
      },
      yPercent:0,
      opacity:1
    },'<')

    let textTyping = gsap.timeline({
      scrollTrigger:{
        trigger: ".p-1-box-vfafbdf-2",
        start: "top 100%",
        end: "100vh 65%",
        toggleActions: "restart none none none",
        markers: false,
      },
    })

    textTyping.to('.box-vfafbdf-2',{
      opacity:1,
    })
    textTyping.to('.p-1-box-vfafbdf-2',{
      text:"//initialization"
    },'<').to('.p-2-box-vfafbdf-2',{
      text:"keeper story"
    }).to('.p-3-box-vfafbdf-2',{
      text:"loading:[47%]"
    }).to('.p-4-box-vfafbdf-2',{
      text:"loading_data"
    }).to('.p-5-box-vfafbdf-2',{
      text:"character_attributes"
    }).to('.p-6-box-vfafbdf-2',{
      text:"klmx transmissions"
    })


    let secondParaTl = gsap.timeline({
      scrollTrigger:{
        trigger: ".content_box-vfafbdf-6",
        start: "top 75%",
        end: "bottom 85%",
        markers: true,
        scrub: true,
      },
    },)

    secondParaTl.fromTo('.content_1_box-vfafbdf-6',{
      yPercent:50,
      opacity:0
    },{
      yPercent:0,
      opacity:1
    },'<')
    secondParaTl.fromTo('.content_2_box-vfafbdf-6',{
      yPercent:100,
      opacity:0
    },{
      yPercent:0,
      opacity:1
    },'<')
    secondParaTl.fromTo('.content_3_box-vfafbdf-6',{
      yPercent:150,
      opacity:0
    },{
      yPercent:0,
      opacity:1
    },'<')
    secondParaTl.fromTo('.content_4_box-vfafbdf-6',{
      yPercent:200,
      opacity:0
    },{
      yPercent:0,
      opacity:1
    },'<')






  }, [createTimeline]);

  return (
    <div className="screen4">
      <div className="box-vfafbdf-1">
        <div className="line1-box-vfafbdf">
          <p className="index_title_screen-4_pre">002</p>
          <p className="index_title_screen-4_post">You are a keeper:an agent</p>
        </div>
        <div className="line2-box-vfafbdf">of power and change in this</div>
        <div className="line3-box-vfafbdf">world</div>
      </div>
      <div className="box-vfafbdf-2">
        <p className="p-1-box-vfafbdf-2"></p>
        <p className="p-2-box-vfafbdf-2"></p>
        <p className="p-3-box-vfafbdf-2"></p>
        <p className="p-4-box-vfafbdf-2"></p>
        <p className="p-5-box-vfafbdf-2"></p>
        <p className="p-6-box-vfafbdf-2"></p>
      </div>
      <div className="box-vfafbdf-3"></div>
      <div className="box-vfafbdf-4">
        <div className="left-box-vfafbdf-4">
          <p>N 35&#176;.37</p>
          <p>E 139&#176;38.57</p>
        </div>
        <div className="right-box-vfafbdf-4">
          {/* <p>N 35&#176;.37</p> */}
          <div className="right-box-vfafbdf-4-icon">
            <div className="poin-1"></div>
            <div className="poin-2"></div>
            <div className="poin-3"></div>
          </div>
          <p>38.8&#176;</p>
        </div>
        <div className="middle-box-vfafbdf-4">
          <video id="bannerVideo" autoPlay muted loop>
            <source src={WavesVideo} type="video/webm" />
          </video>
        </div>
      </div>

      <div className="down-screen4">
        <div className="box-vfafbdf-5">
          <div className="line-box-vfafbdf-5"></div>
        </div>
        <div className="box-vfafbdf-6">
          <div className="content_box-vfafbdf-6">
            <div className="content_1_box-vfafbdf-6">
              <p className="pre_content_1_box-vfafbdf-6">003 </p>
              <p className="post_content_1_box-vfafbdf-6">
                What will you do with this
              </p>
            </div>
            <div className="content_2_box-vfafbdf-6">
              power? Will you choose to
            </div>
            <div className="content_3_box-vfafbdf-6">
              protect or destroy? To give
            </div>
            <div className="content_4_box-vfafbdf-6">or to take?</div>
          </div>
        </div>
        <div className="box-vfafbdf-7"></div>
        <div className="box-vfafbdf-8">
          <p className="pre_content_1_box-vfafbdf-8">keepers symbol</p>
        </div>
        <div className="box-vfafbdf-9"></div>
      </div>
    </div>
  );
};

export default Screen4;
