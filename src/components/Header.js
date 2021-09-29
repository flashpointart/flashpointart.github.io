import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return(
        <Container fluid style={{backgroundColor: '#181818'}}>
            <Container>
                <Row>
                    <Col className='d-flex justify-content-center mt-5 mb-5 text-center'><h1 style={{fontSize: '80px'}}>FLASHPOINT ART</h1></Col>
                </Row>
                <Row className='pb-5'>
                    <Col md className='mb-3'><Link to='/' style={{textDecoration: 'none'}}><h6 className='text-center'>HOME</h6></Link></Col>
                    <Col md className='mb-3'><Link to='/about' style={{textDecoration: 'none'}}><h6 className='text-center'>CHI SIAMO</h6></Link></Col>
                    <Col md className='mb-3'><Link to='/shop' style={{textDecoration: 'none'}}><h6 className='text-center'>SHOP</h6></Link></Col>
                    <Col md><Link to='/artists' style={{textDecoration: 'none'}}><h6 className='text-center'>ARTISTI</h6></Link></Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Header;