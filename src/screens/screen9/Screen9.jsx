import { useEffect } from 'react'
import './screen9.scss'
import gsap from 'gsap/all';

const Screen9 = () => {
  useEffect(()=>{
    let screen9Tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".screen9",
        start: "top top",
        end: "bottom top",
        markers:true,
        scrub: 1,
      },
    });
    
  },[])
  return ( 
    <div className='screen9'>screen9</div>
  )
}

export default Screen9