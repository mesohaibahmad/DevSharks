

import Hero from './components/Hero'
import CardSlider from './components/CardSlider'
import Services from './components/Services'

export default function Home(){
   
   return(
   <div >
   
   
   <Hero/>
   <CardSlider/>
   <Services category={"Web Development"} data={{img1: "/images/custom-full-stack-web-developer.png", nm1: "Sohaib Ahmad", img2: "/images/wordpress.png", nm2: "Muhammad Sufyan", img3: "/images/frontend.jpg", nm3: "Aqib Ali", img4: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/148372632/original/bba33da7390943f3d97d5755bac2d9f0bdb31292.png", nm4: "Saim Razzaq"   ,desc: "I will create resposive wordpress website using Elementor Pro"}}/>
   <Services category={"App Development"} data={{img4: "/images/custom-full-stack-web-developer.png", nm1: "Zeeshan", img3: "/images/wordpress.png", nm2: "Muhammad Sufyan", img2: "/images/frontend.jpg", nm3: "Aqib Ali", img1: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/148372632/original/bba33da7390943f3d97d5755bac2d9f0bdb31292.png", nm4: "Saim Razzaq"   ,desc: "I will create resposive wordpress website using Elementor Pro"}}/>

   
  </div>);
}