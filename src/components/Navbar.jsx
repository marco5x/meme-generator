import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import meme from "../assets/meme.png";

export const NavBar = () => {
    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="/">
                        <div className="d-flex gap-4 align-items-center">
                            <img
                                alt="meme"
                                src={meme}
                                width="55"
                                height="50"
                                className="d-inline-block align-top"
                            />
                            <h1 className="fw-bolder"> MEME GENERATOR </h1>
                        </div>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    );
};
