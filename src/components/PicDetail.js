import { Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";

const PicDetail = () => {

    const loc = useLocation();
    const hist = useHistory();
    
    const element = loc.state ? (loc.state.element || null) : null;

    if (element === null) {
        hist.push('/');
    }

    return(
        <Container fluid style={{backgroundColor: '#131313', height:'80vh'}} className='pb-5 pt-5'>
            <Container>

            </Container>
        </Container>
    );
}

export default PicDetail;