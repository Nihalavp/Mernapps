import { Container,Row,Col } from 'react-bootstrap';
function Header() {
  return (
   <Container>
   <Row>
   <Col md="12" className="mt-5 border-bottom">
   <h3 className='text-center'>this is header</h3>
   </Col>
   </Row>
   </Container>
  )
}

export default Header;
