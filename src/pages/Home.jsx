

import Carousel from 'react-bootstrap/Carousel';
import ban1 from "../images/ban1.jpg";
import ban5 from "../images/ban5.gif";
import ban3 from "../images/ban3.gif";


import imgg2 from "../images/imgg2.gif";
import post2 from "../images/post2.jpg";
import post3 from "../images/post3.gif";


const Home = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img src={ban1} alt="Banner 1" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={ban5} alt="Banner 2" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={ban3} alt="Banner 3" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            {/* section 2 images setion */}
            <br />
            <br />
 <div id='container'>
  
               {/* 1st img */}
               <div className='row1'>
               <div className='colon1'>
          <div id='imgg1'>
             <div className='bannertext'>
                  <h2>Clothing Collections 2030</h2>
         </div>

            
          <img src={imgg2} alt="Banner 3" style={{ width: "20rem", height: "350px", objectFit: "cover" }} />
      
        
    </div>
    </div>
     </div>
     
     {/* 2nd  img */}


      <div id='imgg2'>
            
          <img src={post2} alt="Banner 3" style={{ width: "20rem", height: "350px", objectFit: "cover" }} />
      
         <div>
            <h2></h2>
         </div>

    </div>
       

    {/* 3rd img */}


     


    <div id='imgg3'>
            
          <img src={post3} alt="Banner 3" style={{ width: "20rem", height: "350px", objectFit: "cover" }} />
      
         <div>
            <h2></h2>
         </div>

    </div>
            


           </div>



        </>
    );
}
export default Home;