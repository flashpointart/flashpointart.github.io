
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {

    return(
        <Container fluid style={{backgroundColor: '#181818'}}>
            <Container>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <h7 style={{margin: '80px', textAlign: 'center', color: '#EDEDED'}}>
                            Copyright © 2021 Flashpoint Art - P.IVA: 00000000000
                        </h7>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Footer;