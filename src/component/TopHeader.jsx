import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TopHeader = () => {
   const CartData= useSelector(state=>state.mycart.cart);
   const CartLength= CartData.length;
   const navigate = useNavigate();
  return (
    <>
      <div id="topheader">

        <h2 className='head1'>Free shipping, 30-day return or refund guarantee.</h2>
  <div>
       <Navbar  data-bs-theme="dark">
        <Container>

          <Nav className="me-auto">
            <Nav.Link href="#home">SING IN</Nav.Link>
            <Nav.Link href="#features"> FAQs</Nav.Link>
            <Nav.Link href="#pricing">ADMIN</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
</div>  <div className='cart'>
              {CartLength}
            <FaShoppingCart onClick={()=>{navigate("/mycart")}} style={{cursor:"pointer"}} /></div>
      </div>



    </>
  )
}
export default TopHeader;