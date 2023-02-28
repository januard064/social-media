import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// import react router dom
import { Outlet } from 'react-router-dom';

function TextLinkExample() {
    return (
        <>
            <Navbar fixed="top" style={{ height:90, backgroundColor:'#008ECC', paddingLeft:10 }}>
                <Container style={{  marginLeft:0}} >
                    <Navbar.Brand >Social-Media</Navbar.Brand>

                </Container>
            </Navbar>

            <Outlet />
        </>

    );
}

export default TextLinkExample;