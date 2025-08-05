

import Hero from './components/Hero'
import CardSlider from './components/CardSlider'
import Services from './components/Services'


export default function Home(){
   
const Spacer = ({ height = 20 }) => (
  <div style={{ height: `${height}px` }} />
);


const sampleCards = [
  {
    image: "https://i.pinimg.com/236x/e5/e5/d4/e5e5d44193014f6e9ded49188341c95a.jpg",
    title: "App Development",

  },
  {
    image: "https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?q=80&w=1002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Web Development",

  },
  {
    image: "https://i.pinimg.com/474x/90/90/5e/90905ee891a9717d1eaa166ec3099f94.jpg",
    title: "App Design",

  },
  {
    image: "https://i.pinimg.com/236x/cb/0a/76/cb0a762c2dfab9d750f4921024aa06aa.jpg",
    title: "Artificial Inteligence",
 
  },
  {
    image: "https://i.pinimg.com/236x/5c/1b/70/5c1b701f8f2c8c11276f86a010ace274.jpg",
    title: "Blockchain",
 
  },
];


   return(
   <div >
   
   
   <Hero/>
   <Spacer height={40} />
       <section className="slider-section">
      <div className="slider-container">
        <h2 className="slider-heading">Featured Services</h2>
        <CardSlider cards={sampleCards} />
      </div>
    </section>
  <Spacer height={40} />
   <Services category={"Web Development"} data={{img1: "/images/custom-full-stack-web-developer.png", nm1: "Sohaib Ahmad", img2: "/images/wordpress.png", nm2: "Muhammad Sufyan", img3: "/images/frontend.jpg", nm3: "Aqib Ali", img4: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/148372632/original/bba33da7390943f3d97d5755bac2d9f0bdb31292.png", nm4: "Saim Razzaq"   ,desc: "I will create resposive wordpress website using Elementor Pro"}}/>
     <Spacer height={40} />
   <Services category={"App Development"} data={{img4: "/images/custom-full-stack-web-developer.png", nm1: "Zeeshan", img3: "/images/wordpress.png", nm2: "Muhammad Sufyan", img2: "/images/frontend.jpg", nm3: "Aqib Ali", img1: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/148372632/original/bba33da7390943f3d97d5755bac2d9f0bdb31292.png", nm4: "Saim Razzaq"   ,desc: "I will create resposive wordpress website using Elementor Pro"}}/>

   
  </div>);
}