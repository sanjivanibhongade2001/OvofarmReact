import React from 'react';
import './Product.css';

import image1 from './images/products.jpg';
import image2 from './images/hipro.png';
import image3 from './images/brown1.png';
import image4 from './images/brown.png';
import image5 from './images/hearty.png';
import image6 from './images/moreovor.png';
import image7 from './images/onday.png';


export default function Products() {
  return (
    <>
       <div className="product">
        <div className="kenko">
            <div className="imgsize" style={{backgroundColor: 'rgb(59, 151, 184);'}}>
                <img src={image1} alt="image1"/>
            </div>
        </div>

        <div className="hi-pro" style={{marginTop:"7rem"}}>

        <div className="pro1">
               <div className="pro1sub">
                <ul style={{width:"40%", float:"left",  marginTop:"-1rem"}} >
                    <br/> <br/>
                    <h2>Hi-Pro</h2>
                        <li>Rich in Vitamins and Proteins.</li>
                        <li>15% bigger in size as compared to the normal eggs available in the market.</li>
                        <li>Undergoes a process that helps keep eggs fresh till the expiry date</li>
                        <li>Laid by chickens fed with vegetarian feed and antibiotics residue-free</li>
                        <li>Fully automatic production, packaging and UV treatment to ensure eggs are hygienic and safe.</li>
                        <li>Protein content present in Pro Eggs provides nearly 12% of the daily RDA for adults (based on ideal body weight).</li>
                        <li>Helps in body building and repairing body tissues.</li>
                        <br/>  
                        <div className="site">
                            <a style={{textDecoration: "none", color:"white"}} href="contactus.html" target="_blank">Available in packs of 6, 10 and 20 eggs.</a>
                        </div>                  
                    </ul>        
                        <img style={{width:"30rem", margin:'2rem'}} src={image2} alt="image2"/> 
                </div>              
            </div>
            
          

            <div className="brown">

               <div className="brownsub">
                <img style={{width:"30rem"}} src={image3} alt="image3"/>   

                <ul style={{width:"40%", float:"right", color:"white",  marginTop:"-1rem"}} >
                    <br/> <br/>
                    <h2>brown</h2>

                    <li>Rich in Vitamins and Proteins.</li>
                    <li>15% bigger in size as compared to the normal eggs available in the market.</li>
                    <li>Undergoes a process that helps keep eggs fresh till the expiry date</li>
                    <li>Laid by chickens fed with vegetarian feed and antibiotics residue-free</li>
                    <li>Fully automatic production, packaging and UV treatment to ensure eggs are hygienic and safe.</li>
                    <li>Protein content present in Pro Eggs provides nearly 12% of the daily RDA for adults (based on ideal body weight).</li>
                    <li>Helps in body building and repairing body tissues.</li>
                    <br/>
                    <div className="site1">
                        <a style={{color: "black",textDecoration: "none"}} href="contactus.html" target="_blank"> Available in packs of 6, 10 and 20 eggs.</a>
                    </div> 
                </ul>
                 
               </div>
                       
            </div>



            <div className="pro1">
               <div className="pro1sub">
                <ul style={{width:"40%", float:"left",  marginTop:"-1rem"}} >
                    <br/> <br/>
                    <h1>Immuno</h1>
                        <li>Enriched With SELINIUM.</li>
                        <li>20% bigger in size as compared to the normal eggs available in the market.</li>
                        <li>Undergoes UV treatment and is extremely hygienic.</li>
                        <li>It works as an antioxidant, especially when combined with Vitamin-E by scavenging free radicals.</li>
                        <li>Laid by hens fed with vegetarian feed</li>
                        <li>Vitamin-E is also important in the formation of red blood cells.</li>
                        <br/>  
                        <div className="site">
                            <a style={{textDecoration: "none", color:"white"}} href="contactus.html" target="_blank">Available in packs of 6, 10 and 20 eggs.</a>
                        </div>                  
                    </ul>        
                    <img className="imgpro" src={image4} alt="brown" style={{width:"30rem"}}/>                  </div>              
            </div>



            <div className="brown">

               <div className="brownsub">
                <img style={{width:"30rem"}} src={image5} alt="hearty"/>   

                <ul style={{width:"40%", float:"right", color:"white",  marginTop: "-1rem"}} >
                    <br/> <br/> <br/> 
                    <h2>Hearty</h2>

                    <li>Low in cholesterol which in turn is good for the heart.</li>
                    <li>Rich in Omega-3 Fatty acids which help in reducing the incidence of CVD, Cancer and Neurological diseases.</li>
                    <li>Undergoes a process that helps keep eggs fresh till the expiry date</li>
                    <li>Laid by chickens fed with vegetarian feed and antibiotics residue-free</li>
                    <li>Fully automatic production, packaging and UV treatment to ensure eggs are hygienic and safe.</li>
                    <li>Machine-graded bigger & uniform eggs of 60-65 gms</li>
                    <li>Blood Pressure can be reduced minimally.</li>
                    <br/>
                    <div className="site1">
                        <a style={{color: "black",textDecoration: "none"}} href="contactus.html" target="_blank"> Available in packs of 6, 10 and 20 eggs.</a>
                    </div> 
                    <br/>
                </ul>
                 
               </div>
                       
            </div>
            
            

            <div className="pro1">
               <div className="pro1sub">
                <ul style={{width:"50%", float:"left",  marginTop:"-1rem"}} >
                    <br/> <br/><br/><br/><br/>
                    <h1 style={{color:"orange"}}>MoreOVOr</h1>
                        <li>Undergoes UV treatment and is extremely hygienic.</li>
                        <li>Laid by hens fed with vegetarian feed.</li>
                        <li>Have 20% more essential nutrients.</li>
                        <li>Fully automatic production, packaging and UV treatment to ensure eggs are hygienic and safe.</li>
                        <br/>  
                        <div className="site">
                            <a style={{textDecoration: "none", color:"white"}} href="contactus.html" target="_blank">Available in pack of 6 eggs.</a>
                        </div>                  
                    </ul>        
                    <img className="imgpro" style={{width:"30rem"}} src={image6} alt="moreovor"/>
                </div>              
            </div>



            <div className="brown">

               <div className="brownsub">
                <img style={{width:"30rem"}} src={image7} alt="onday"/>   

                <ul style={{width:"40%", float:"right", color:"white",  marginTop: "-1rem"}} >
                    <br/> <br/> <br/> 
                    <h2>On-Day</h2>

                    <li>Eggs are of superior quality.</li>
                    <li>Neat & clean eggs with no stains.</li>
                    <li>Undergoes UV treatment and is extremely hygienic.</li>
                    <li>Fully automatic production, and packaging.</li>
                    <li>Machine-graded bigger & uniform eggs of 60-65 gms</li>
                    <li>Blood Pressure can be reduced minimally.</li>
                    <br/>
                    <div className="site1">
                        <a style={{textDecoration: "none", color:"rgb(0, 0, 0)"}} href="contactus.html" target="_blank"> Available in packs of 6 & 30 eggs.</a>
                    </div> 
                    <br/>
                
                 </ul>
               </div>
                       
            </div>
                        


        </div>
    </div>
    </>
  )
}
