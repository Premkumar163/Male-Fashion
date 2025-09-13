import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useNavigate } from "react-router-dom";




const TopMenu=()=>{

   const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
     let api=`http://localhost:3000/admin/?adminid=${email}`;

 const response = await axios.get(api);
     console.log(response.data);
 
      if (response.data.length>=1)
      {
            if (response.data[0].password==password)
            {
                 navigate("/admin")
            }
            else 
            {
              alert("Galat pass")
            }
      }
      else 
      {
        alert("Invalid Email!");
      }
   }
return(
        <>
       
        <div id='topmenu'>
            <div id='logo'>
                <img src={logo} width="160" height="24px" id='imgg'/>

            </div>
  
  <div id="mainmenu">
          <Navbar  >
        <Container>
         
          <Nav className="me-auto1">
            <Nav.Link id="front1" href="#home">Home</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#pages">Pages</Nav.Link>
            <Nav.Link href="#blogs">Blog</Nav.Link>
            <Nav.Link href="#contact">Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
                </div>

       {/* <div div='rightmenu'>
        <button id='btn01' variant="primary" onClick={handleShow}>Admin / Login</button>
       </div>
       </div> */}


        <div id="rightmenu">
              <Button id="rightmenu" variant="primary" onClick={handleShow}>
      Admin Login
      </Button>
              
            </div>
         </div>

          
          

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>

           <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={handleSubmit}>
       Login
      </Button>
    </Form>
           

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


        </>
    )
}
export default TopMenu;
