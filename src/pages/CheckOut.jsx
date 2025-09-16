// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// const CheckOut=()=>{
//     const   navigate = useNavigate();
//      const [input, setinput]=useState({});
//      const CartData = useSelector(state=>state.mycart.cart);  
//     let products;
//     let totalAmount=0;
//      const ans=CartData.map((key)=>{
//              products+=",  "+key.name;
//              totalAmount+=key.price*key.qnty;
//      })

//       const handelinput=(e)=>{
//       let name=e.target.name;
//       let value =e.target.value;

//       setinput((values)=>({...values,[name]:value}))
//         console.log(input);
//    }

   
//    const handelSubmit=async()=>{
//      e.preventDefault();
//       let api="http://localhost:3000/order"
//       let responces= await axios.post(api,input);
//        navigate("/paydone");
//       console.log(responces);
//    }


//     return(
//         <>
//         <div>
        
//         <h1></h1>
//         <h6 aling="center"> Product : {products}</h6>
//         <h6 aling="center"> Net Payble Amount : {totalAmount}</h6>
//           <h1> CheckOut</h1>
//            <h6 align="center"> Products : {products} </h6>
//            <h3 align="center"> Net Payble Amount : {totalAmount} </h3>
//            <div>
//             <Form style={{margin:"auto", width:"400px"}}  onSubmit={handelSubmit}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Name</Form.Label>
//         <Form.Control type="text"  name="name"  onChange={handelinput} />
//       </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter City</Form.Label>
//         <Form.Control type="text"  name="city"  onChange={handelinput}/>
//       </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Shipping Address</Form.Label>
//         <Form.Control type="text"  name="address"  onChange={handelinput}/>
//       </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Contact No.</Form.Label>
//         <Form.Control type="text"  name="contact"  onChange={handelinput} />
//       </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Pin Code</Form.Label>
//         <Form.Control type="text"   name="pin"  onChange={handelinput}/>
//       </Form.Group>
//       <Button variant="primary" type="submit" >
//         Submit
//       </Button>
//     </Form>
//     </div>

//         </div>
//         </>
//     )
// }
// export default CheckOut;



import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const CheckOut = () => {
  const navigate = useNavigate();
  const [input, setinput] = useState({});
  const CartData = useSelector(state => state.mycart.cart);

  let products = "";
  let totalAmount = 0;
  CartData.forEach(key => {
    products += ", " + key.name;
    totalAmount += key.price * key.qnty;
  });

  const handelinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setinput(values => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    let api = "http://localhost:3000/order";
    await axios.post(api, input);
    navigate("/paydone");
  };

  return (
    <>
      <div id='CheckOuttop'>
        <h3 id='checkfont'>CheckOut</h3>
        <h6 align="center">Products: {products}</h6>
        <h3 align="center">Net Payble Amount: {totalAmount}</h3>
        <div>
          <Form style={{ margin: "auto", width: "400px" }} onSubmit={handelSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control type="text" name="name" onChange={handelinput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCity">
              <Form.Label>Enter City</Form.Label>
              <Form.Control type="text" name="city" onChange={handelinput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Enter Shipping Address</Form.Label>
              <Form.Control type="text" name="address" onChange={handelinput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicContact">
              <Form.Label>Enter Contact No.</Form.Label>
              <Form.Control type="text" name="contact" onChange={handelinput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPin">
              <Form.Label>Enter Pin Code</Form.Label>
              <Form.Control type="text" name="pin" onChange={handelinput} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};
export default CheckOut;