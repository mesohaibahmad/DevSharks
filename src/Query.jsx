import './Query.css';
import Services from './components/Services';
import wordpressLogo from './assets/wordpress log.jpg';
import shopifyLogo from './assets/shopify logo.png';    
import customWebsitesLogo from './assets/custom-coding-icon.webp';
import wooLogo from './assets/WooCommerce-Logo.jpg';
export default function Query(){
    return(
        <>
        <div class="searchpage">
        <div class="breadcrumbs">
            <a href="#"><i class="fa-solid fa-house"></i></a>
            <span>/</span>
            <a href="#">Programming & Tech</a>
            <span>/</span>
            <a href="#">Website & Development</a>
        </div>
        <div class="header">
            <h1>E-commerce Website Development</h1>
            <p>Find the best E-commerce Website Development services you need to help you successfully meet your project planning goals and deadlines.</p>
        </div>

        <div class="services">
            <div class="service-item">
                <a href="#">
                    <img src={shopifyLogo} alt="shopify"/>
                    <span>Shopify</span>
                </a>
            </div>

            <div class="service-item">
                <a href="#">
                    <img src={wordpressLogo} alt="wordpress"/>
                    <span>Wordpress</span>
                </a>
            </div>

            <div class="service-item">
                <a href="#">
                    <img src={customWebsitesLogo} alt="custom websites"/>
                    <span>Custom Websites</span>
                </a>
            </div>

            <div class="service-item">
                <a href="#">
                    <img src={wooLogo} alt="woocommerce"/>
                    <span>WooCommerce</span>
                </a>
            </div>
        </div>

        <div class="options">
            <div class="option-item">
                <a href="#">
                    <span>Service options</span>
                    <select>
                        <option value="ecommerce">E-commerce Development</option>
                        <option value="webdesign">Web Design</option>
                        <option value="seo">SEO Services</option>
                        <option value="marketing">Digital Marketing</option>
                    </select>
                </a>
            </div>

            <div class="option-item">
                <a href="#">
                    <span>Seller details</span>
                    <select>
                        <option value="top-rated">Top Rated Seller</option>
                        <option value="level-two">Level Two Seller</option>
                        <option value="level-one">Level One Seller</option>
                        <option value="new-seller">New Seller</option>
                    </select>
                </a>
            </div>

            <div class="option-item">
                <a href="#">
                    <span>Budget</span>
                    <select>
                        <option value="under-50">$5 - $50</option>
                        <option value="50-100">$50 - $100</option>
                        <option value="100-200">$100 - $200</option>
                        <option value="over-200">$200+</option>
                    </select>
                </a>
            </div>

            <div class="option-item">
                <a href="#">
                    <span>Delivery Time</span>
                    <select>
                        <option value="24-hours">Up to 24 Hours</option>
                        <option value="3-days">Up to 3 Days</option>
                        <option value="7-days">Up to 7 Days</option>
                        <option value="anytime">Anytime</option>
                    </select>
                </a>
            </div>
        </div>
        </div>
      { <>  <Services category={"Web Development"} data={{img1: "/images/custom-full-stack-web-developer.png", nm1: "Sohaib Ahmad", img2: "/images/wordpress.png", nm2: "Muhammad Sufyan", img3: "/images/frontend.jpg", nm3: "Aqib Ali", img4: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/148372632/original/bba33da7390943f3d97d5755bac2d9f0bdb31292.png", nm4: "Saim Razzaq"   ,desc: "I will create resposive wordpress website using Elementor Pro"}}/>
   <Services category={"App Development"} data={{img4: "/images/custom-full-stack-web-developer.png", nm1: "Zeeshan", img3:  "/images/wordpress.png", nm2: "Muhammad Sufyan", img2:  "/images/frontend.jpg", nm3: "Aqib Ali", img1: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/148372632/original/bba33da7390943f3d97d5755bac2d9f0bdb31292.png", nm4: "Saim Razzaq"   ,desc: "I will create resposive wordpress website using Elementor Pro"}}/>
</>}

      
   
        </>
    );
}