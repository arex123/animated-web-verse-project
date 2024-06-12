import './dashboard.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger) 


const Dashboard = () => {


  useEffect(()=>{

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

      {/* <div className="back-img-hero"></div> */}
      <div className="screen-1">
        <p className='paragraph-1'>KPR is a brand that focuses on collective narrative and empowering storytellers. Keepers is a living story, an uncharted world waiting to be explored, to be imagined.</p>
        <div className='paragraph-2'>
          <p className='paragraph-2-keep'>Keep.</p>
          <p className='paragraph-2-protect'>protect.</p>
          <p className='paragraph-2-reimagine'>reimagine.</p>
        </div>
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