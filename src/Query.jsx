import './Query.css';
import Services from './components/Services';
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
                    <img src="shopify logo.png" alt="shopify"/>
                    <span>Shopify</span>
                </a>
            </div>

            <div class="service-item">
                <a href="#">
                    <img src="wordpress logo.png" alt="wordpress"/>
                    <span>Wordpress</span>
                </a>
            </div>

            <div class="service-item">
                <a href="#">
                    <img src="custom websites logo.png" alt="custom websites"/>
                    <span>Custom Websites</span>
                </a>
            </div>

            <div class="service-item">
                <a href="#">
                    <img src="woo.png" alt="woocommerce"/>
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
      { <>  <Services category={"Web Development"} data={{img1: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/300747588/original/b57c5fe829645132052811afc2a6d90992527255/turn-figma-designs-into-custom-webflow-websites-expert-webflow-developer.png", nm1: "Sohaib Ahmad", img2: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/99168261/original/ccaf43ae6a4c6633d2ac21454d5e51e3b1ccf7c2.png", nm2: "Muhammad Sufyan", img3: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/363517211/original/c260743cdc70e9a43f97edc7869a0aed20fe623b/do-react-js-next-js-typescript-web-app-frontend-or-full-stack-development.png", nm3: "Aqib Ali", img4: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/148372632/original/bba33da7390943f3d97d5755bac2d9f0bdb31292.png", nm4: "Saim Razzaq"   ,desc: "I will create resposive wordpress website using Elementor Pro"}}/>
   <Services category={"App Development"} data={{img4: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/300747588/original/b57c5fe829645132052811afc2a6d90992527255/turn-figma-designs-into-custom-webflow-websites-expert-webflow-developer.png", nm1: "Zeeshan", img3: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/99168261/original/ccaf43ae6a4c6633d2ac21454d5e51e3b1ccf7c2.png", nm2: "Muhammad Sufyan", img2: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/363517211/original/c260743cdc70e9a43f97edc7869a0aed20fe623b/do-react-js-next-js-typescript-web-app-frontend-or-full-stack-development.png", nm3: "Aqib Ali", img1: "https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/148372632/original/bba33da7390943f3d97d5755bac2d9f0bdb31292.png", nm4: "Saim Razzaq"   ,desc: "I will create resposive wordpress website using Elementor Pro"}}/>
</>}

      
   
        </>
    );
}