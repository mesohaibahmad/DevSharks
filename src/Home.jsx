

import Hero from './components/Hero'
import CardSlider from './components/CardSlider'
import Services from './components/Services'

export default function Home(){
   
   return(
   <div style={{width:'100vw', overflowX:'hidden'}}>
   
   
   <Hero/>
   <CardSlider/>
   <Services category={"Web Development"} data={{img1: "/images/custom-full-stack-web-developer.png", nm1: "Sohaib Ahmad", img2: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/99168261/original/ccaf43ae6a4c6633d2ac21454d5e51e3b1ccf7c2.png", nm2: "Muhammad Sufyan", img3: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/363517211/original/c260743cdc70e9a43f97edc7869a0aed20fe623b/do-react-js-next-js-typescript-web-app-frontend-or-full-stack-development.png", nm3: "Aqib Ali", img4: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/148372632/original/bba33da7390943f3d97d5755bac2d9f0bdb31292.png", nm4: "Saim Razzaq"   ,desc: "I will create resposive wordpress website using Elementor Pro"}}/>
   <Services category={"App Development"} data={{img4: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/300747588/original/b57c5fe829645132052811afc2a6d90992527255/turn-figma-designs-into-custom-webflow-websites-expert-webflow-developer.png", nm1: "Zeeshan", img3: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/99168261/original/ccaf43ae6a4c6633d2ac21454d5e51e3b1ccf7c2.png", nm2: "Muhammad Sufyan", img2: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/363517211/original/c260743cdc70e9a43f97edc7869a0aed20fe623b/do-react-js-next-js-typescript-web-app-frontend-or-full-stack-development.png", nm3: "Aqib Ali", img1: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/148372632/original/bba33da7390943f3d97d5755bac2d9f0bdb31292.png", nm4: "Saim Razzaq"   ,desc: "I will create resposive wordpress website using Elementor Pro"}}/>

   
  </div>);
}