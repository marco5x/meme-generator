import React, { useEffect, useState } from "react";
import { MemeCard } from "../components/MemeCard";
import { getMemes } from "../api/getMemes";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Home = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    getMemes().then((meme) => setMemes(meme.data.memes));
  }, []);

  return (
    <Container>
      <Row xs={1} s={1} md={2} lg={3} xl={4} className="g-3">
        {!memes ? (
          <h3>Ups 🤦🏻‍♂️</h3>
        ) : (
          memes.map((meme) => (
            <Col key={meme.name}>
              <MemeCard
                img={!meme.url ? <Spinner animation="grow" /> : meme.url}
                title={meme.name}
              />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};
