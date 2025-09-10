import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const TopHeader = () => {
  return (
    <>
      <div id="topheader">

        <h2 className='head1'>Free shipping, 30-day return or refund guarantee.</h2>

       <Navbar  data-bs-theme="dark">
        <Container>

          <Nav className="me-auto">
            <Nav.Link href="#home">SING IN</Nav.Link>
            <Nav.Link href="#features"> FAQs</Nav.Link>
            <Nav.Link href="#pricing">ADMIN</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      </div>

    </>
  )
}
export default TopHeader;