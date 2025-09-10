import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../images/logo.png'
const TopMenu=()=>{
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
            <Nav.Link href="#features">Shop</Nav.Link>
            <Nav.Link href="#pricing">Pages</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
                </div>

       <div div='btn1'>
        <button id='btn01'>Admin / Login</button>
       </div>
       

        

         
        </div>

        </>
    )
}
export default TopMenu;
