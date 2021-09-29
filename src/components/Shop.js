import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

import useWindowSize from '../useWindowSize.js';

const Quadro = (props) => {

    const hist = useHistory();
    const size = useWindowSize();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const handleClick = () => {
        hist.push('/pictures/' + props.element.id.toString(), { element: props.element});
    }

    return(
        <>
        <Col className='mb-4'>
        <Card style={{ width: '20rem', backgroundColor:'#171717', color:'#EDEDED', border:'1px solid #272727'}}>
            <Card.Img onClick={handleClick} variant="top" src={props.element.imgSrc} style={ size.width > 975 ? {width: '100%', height: '12vw',objectFit:'cover', cursor: 'pointer'} : {cursor: 'pointer'}} />
            <Card.Body>
                <Card.Title className='mb-3 mt-3'><h5>{props.element.title}</h5></Card.Title>
                <Card.Text className='d-flex justify-content-center' style={{flexDirection: 'column'}}>
                    <h7 className='pb-3'>by {props.element.artist}</h7>
                    <Button variant='dark' style={{backgroundColor: '#333333'}} onClick={handleOpen} className='d-flex justify-content-center align-items-center'>
                        <h7 style={{marginRight: '10px'}}>Contatta ora</h7>
                        <FontAwesomeIcon icon={faPaperPlane} color={'#EDEDED'}/> 
                    </Button>
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>

        <Modal show={show} onHide={handleClose} size="lg" centered style={{backgroundColor: 'rgba(0,0,0,0.4)'}}>
            <Modal.Header style={{backgroundColor: '#171717', border:'1px solid #272727'}}>
                <Modal.Title style={{color: '#EDEDED'}}>Contatti</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{color: '#EDEDED', backgroundColor: '#171717', border:'1px solid #272727'}}>
                <Row>
                    <Col className='d-flex align-items-baseline'>
                    <FontAwesomeIcon icon={faEnvelope} color='#EDEDED' />
                    <h7 className='mb-4 mt-4' style={{color: '#EDEDED', marginLeft:'20px'}}>Email: test@gmail.com</h7>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex align-items-baseline'>
                    <FontAwesomeIcon icon={faPhone} color='#EDEDED' />
                    <h7 className='mb-4 mt-4' style={{color: '#EDEDED', marginLeft:'20px'}}>Whatsapp: +39 000 000 0000</h7>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer style={{color: '#EDEDED', backgroundColor: '#171717', border:'1px solid #272727'}}>
                <Button variant='dark' style={{backgroundColor: '#333333'}} onClick={handleClose}>Chiudi</Button>
            </Modal.Footer>
        </Modal>

        </>
    );
}

const Shop = () => {

    const [paintings, setPaintings] = useState([]);
    const [artists, setArtists] = useState([]);

    useEffect(() => {

        const TEST = [
            { title: 'Quadro 1', price: 130.25, artist: 'Artist 1', imgSrc: 'https://deodato-arte.it/wp-content/uploads/2020/04/fontana-1.jpg', id: 0 },
            { title: 'Quadro 2', price: 130.25, artist: 'Artist 1', imgSrc: 'https://compote.slate.com/images/8fbdbd63-b086-4221-8ded-33fc15c0ac6c.jpg', id: 1 },
            { title: 'Quadro 3', price: 130.25, artist: 'Artist 2', imgSrc: 'https://www.worldatlas.com/r/w1200/upload/5f/96/29/edvard-munch-1893-the-scream-oil-tempera-and-pastel-on-cardboard-91-x-73-cm-national-gallery-of-norway.jpg', id: 2 },
            { title: 'Quadro 4', price: 130.25, artist: 'Artist 2', imgSrc: 'https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/trieste-gulf-palette-knife-oil-painting-on-canvas-by-leonid-afremov-leonid-afremov.jpg', id: 3 },
            { title: 'Quadro 5', price: 130.25, artist: 'Artist 3', imgSrc: 'https://www.finasrl.it/wp-content/uploads/2015/12/img-test-300x225.jpg', id: 4 },
            { title: 'Quadro 6', price: 130.25, artist: 'Artist 4', imgSrc: 'https://www.finasrl.it/wp-content/uploads/2015/12/img-test-300x225.jpg', id: 5 }
        ];

        setPaintings(TEST);
        setArtists([...new Set(TEST.map(el => el.artist))].sort());

    }, []);

    return (
        <Container fluid style={{backgroundColor: '#101010'}} className='pb-5 pt-5'>
            <Container>
                <Row>
                    <Col md={2} className='mb-4'>
                        <Row><h3 className='mb-4'>Index</h3></Row>

                        {artists.map((el, i) => <Link to={'/artists/' + el} style={{textDecorationColor: '#EDEDED'}}><Row key={i}><h6 className='mb-3'>{el}</h6></Row></Link>)}

                    </Col>
                    <Col md={10}>
                        <Row><Col><h3 className='mb-4'>Shop</h3></Col></Row>

                        <Row className='g-3'>
                        {paintings.map((el, i) => <Quadro key={i} element={el} />)}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Shop;