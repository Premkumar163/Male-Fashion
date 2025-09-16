

import Carousel from 'react-bootstrap/Carousel';
import ban1 from "../images/ban1.jpg";
import ban5 from "../images/ban5.gif";
import ban3 from "../images/ban3.gif";


import imgg2 from "../images/imgg2.gif";
import post2 from "../images/post2.jpg";
import post3 from "../images/post3.gif";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import top1 from "../images/top1.jpg";
import top2 from "../images/top2.jpg";
import top3 from "../images/top3.jpg";

import { useState,useEffect} from 'react';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { addTocart } from '../cartSlice';


const Home = () => {

  const [mydata,setmydata]=useState([])
  const dispatch = useDispatch();

  const loadData=async()=>{
        let api="http://localhost:3000/products";
    const response=await axios.get(api);
    console.log(response.data)
    setmydata(response.data);
  }

  useEffect(()=>{
    loadData();
  }, [])

  const ans= mydata.map((key)=>{
    return(
 <>
 <Card style={{ width: '18rem', margin:"10px"   }}>
      <Card.Img variant="top" src={key.image}  height="200" />
      <Card.Body>
        <Card.Title style={{}}>{key.brand}</Card.Title>
        <Card.Text>
         {key.name}
           
           <span style={{color:"red",padding:"2px"}}>Category : {key.category}</span> 
           <br />
           <span style={{color:"navy" , fontWeight:"bold"}}>Price : {key.price}</span> 
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addTocart({id:key.id, name:key.name, brand:key.brand, category:key.category, price:key.price, images:key.images, qnty:1}))}}>Add To Cart</Button>
      </Card.Body>
    </Card>

    
      </>
    )
  })


  return (
        <>
        <div>
            <Carousel id='topbanner'>
                <Carousel.Item>
                    <img src={ban1} alt="Banner 1" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={ban5} alt="Banner 2" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={ban3} alt="Banner 3" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>


            {/* section 2 images setion */}
            <br />
            <br />
               <div id='container'>
  
               {/* 1st img */}
               <div className='row1'>
               <div className='colon1'>
          <div id='imgg1'>
             <div className='bannertext'>
                  <h2 id='font1'>Clothing<span className='span1'> <br /> Collections  2030</span></h2>
                  <br /> <br /><br />
                  <div className='shopnow1'>
                 <Link>shop now</Link>
                 </div>
         </div>

            
          <img src={imgg2} alt="Banner 3" style={{ width: "20rem", height: "350px", objectFit: "cover" }} />
      
        
    </div>
    </div>
     </div>
     
     {/* 2nd  img */}

    <div className='row2'>
      
            
          
             
             <div id='imgg2'>
                <img src={post2} alt="Banner 3" style={{ width: "20rem", height: "350px", objectFit: "cover" }} />
          
             <div className='bannertext2'>
                  <h2 id='font2'>Accessories</h2>
                  
                  <div className='shopnow2'>
                 <Link>shop now</Link>
                 </div>
         </div> 
      
         <div>
           
        </div>

    </div>
    </div>
       

    {/* 3rd img */}


     


    <div id='imgg3'>

         <div className='bannertext3'>
<h2 id='font1'>Jordan<span className='span3'> <br /> Collections  <span className='span03'>2025</span></span></h2>
                  
                  <div>
                 <Link  className='shopnow3'>shop now</Link>
                 </div>
         </div> 
            
           <img src={post3} alt="Banner 3" style={{ width: "20rem", height: "350px", objectFit: "cover" }} />
      
         

     </div>
            


           </div>

           <br />
           <br />
           <br />
           <br />
           <br />
           <br />

<div id='card'>
    
    <div className='ourtopfont'>
            <h1> Out Top Collections</h1>
             
            </div>

            <div id='carditems'>

    <div id='topCloths'>
      
        
 <Card style={{ width: '18rem' }}>
      <Card.Img  variant="top" src={top1}  height="300" />
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick
        </Card.Text>
        <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

    </div>

    <div id='topCloths'>
      
        
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={top2}  height="300" />
      <Card.Body >
         {/* <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick
        </Card.Text> */}
        {/* <Button variant="primary">Go somewhere</Button>  */}
      </Card.Body>
    </Card>

    </div>


    <div id='topCloths'>
      
        
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={top3}  height="300" />
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick
        </Card.Text>
        <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
<br /><br />
           

         
    </div>
    </div>
</div>

<div className='ourtopfont1'>

            <h2 id='trend'> Trending This Week</h2>
             
            </div>

<div id='topwacthes' style={{width:"65rem",height:"10rem",gap:"3rem", margin:"auto", marginTop:"2rem"}}>
        {ans}
        </div>


        </>
    );
}
export default Home;