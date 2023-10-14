import React from 'react'
import vg from '../assets/2.webp';
import {AiFillGoogleCircle ,
AiFillAmazonCircle,
AiFillYoutube,
AiFillInstagram
} from "react-icons/ai";
 export const Home = () => {
  return (
    <>
    <div className='home' id='home'>
    <main>
    <h1>Techstart</h1>
   <p>Solution to all your problem</p>
    </main>
    </div>
    <div className="home2">
    <img src={vg} alt='Graphic s'/>
    <div>
    <p>we are here to  innovate and advance technology, providing solutions that improve people's lives, drive business efficiency, and contribute to a more connected and sustainable world. </p>
   </div>
    </div>
    <div className="home3" id='about'>
    <div>
    <h1>about</h1>
    <p>
    The  company is dedicated to pioneering innovation and driving progress in the technology sector. Our primary goal is to develop cutting-edge solutions that not only address the immediate needs of businesses and individuals but also foster long-term advancements in various fields. We strive to make technology accessible, efficient, and sustainable, creating a positive impact on society, the environment, and the global economy through our products and services
    </p>
    </div>
    </div>
    <div className="home4" id='brands'>
    <div>
    <h1>Brands</h1>
    <article>
   
    <div style={{
      animationDelay: "0.3s",
    }}>
    <AiFillGoogleCircle/>
    <p>Google</p>
    
    </div>
    <div style={{
      animationDelay: "0.5s",
    }}>
    <AiFillAmazonCircle/>
    <p>Amazon</p>
    
    </div>
    <div style={{
      animationDelay: "0.7s",
    }}>
    <AiFillYoutube/>
    <p>Youtube</p>
    
    </div>
    <div style={{
      animationDelay: "1s",
    }}>
    <AiFillInstagram/>
    <p>Instagram</p>
    
    </div>
    </article>
    </div>
    </div>
    </>
  )
}
export default Home ;

