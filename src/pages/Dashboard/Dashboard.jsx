import './dashboard.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger) 


const Dashboard = () => {


  useEffect(()=>{

    window.addEventListener("mousemove", (event) => {
      let width = window.innerWidth,
      height = window.innerHeight,
      positionX = event.clientX / width - 0.55,
      positionY = event.clientY / height - 0.55;
      
      gsap.to(".back-img-hero1", {
        rotationX: -positionX * 18,
        rotationY: positionY * 18,
        transformPerspective:1000,
      });
      // gsap.to(".girl-img", {
        //   rotationX: -positionX * 18,
        //   rotationY: positionY * 18,
        //   // transformPerspective:1000,
        // });
      });
      
    const { innerHeight } = window;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".back-img-hero1",
        // pin: true,
        start:'0% 5%',
        end:'center 30%',

        // end:`+=${innerHeight*2}`,
        scrub: true,
        markers:true
        // markers: {
        //   startColor: "red",
        //   endColor: "red",
        //   fontSize: "18px",
        //   fontWeight: "bold",
        //   indent: 20,
        // },
      },
    });

    // tl.to('.back-img-hero1',{
    //   x:600,
    //   y:200

    // })

    tl.from(".back-img-hero-pic", {
      scale: 10,
      transformOrigin: "bottom 40%",
      // stager: 0.25,
      duration: 1,      
    });
    
    console.log('innerHeight ',innerHeight)
    // tl.to(".back-img-hero1", {
    //   duration: 1,
    //   yPercent: 20,
      // marginTop:'10%',
      // start: `+=${innerHeight / 2}`,
      // end: `+=${innerHeight / 2}`,
      // marker:true
      // scrub: true,
    // });
    // tl.set(".back-img-hero", {
    //   // duration: 1,
    //   position:'fixed !important',
    //   zIndex: 999,
     
    // });

    // tl.set(".back-img-hero",{
    //   borderRadius:"50px",
    //   position:"fixed",
    // })
    // gsap.to(".back-img-hero",{
    //   scrollTrigger:{
    //     trigger:".back-img-hero",
    //     toggleActions:"restart pause none none"
    //   },
    //   height:"20%",
    //   width:"20%",
    // })

  },[])

  return (
    <div className='dashboard'>

      <div className="back-img-hero1">
        <img className='back-img-hero-pic' src="https://pbs.twimg.com/media/GP6D5CyXkAAIUKO?format=jpg&name=4096x4096" alt="img" />
      </div>
      <div className="screen-1">
        {/* <p className='paragraph-1'>KPR is a brand that focuses on collective narrative and empowering storytellers. Keepers is a living story, an uncharted world waiting to be explored, to be imagined.</p>
        <div className='paragraph-2'>
          <p className='paragraph-2-keep'>Keep.</p>
          <p className='paragraph-2-protect'>protect.</p>
          <p className='paragraph-2-reimagine'>reimagine.</p>
        </div> */}
       </div>
      
      <div className="screen-2"></div>
      <div className="screen-3"></div>
      <div className="screen-4"></div>
      <div className="screen-4"></div> 
      <div className="screen-4"></div>
      <div className="screen-4"></div>
      
    </div>
  )
}

export default Dashboard