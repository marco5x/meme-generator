import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export const Footer = () => {
  return (
    <Container>
      <div className="d-flex gap-2 p-2 justify-content-center align-items-center bottom-0 bg-secondary bg-opacity-25 position-sticky mt-4 ">
        <Button variant="outline-light">
          <a target="blank" href="https://github.com/marco5x">
            <img
              src={
                "https://raw.githubusercontent.com/seasonfif/github/master/icon/icon_192.png"
              }
              alt="GitHub"
              width="40px"
            />
          </a>
        </Button>
        <Button variant="outline-light">
          <a target="blank" href="https://www.linkedin.com/in/marcos-cruz-dev/">
            <img
              src={
                "https://freepngimg.com/thumb/social_media/74290-icons-media-wallpaper-linkedin-desktop-computer-social.png"
              }
              alt="Linkedin"
              width="40px"
            />
          </a>
        </Button>
      </div>
    </Container>
  );
};
