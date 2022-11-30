import Button from 'react-bootstrap/Button';

export const Footer = () => {
    return (
        <div className="d-flex gap-2 p-2 justify-content-center align-items-center bottom-0 bg-secondary bg-opacity-25 w-100 position-sticky flex-row mt-4 ">
            <Button variant="outline-light" >
                <a target="blank" href='https://github.com/marco5x'>    
                   <img src={'https://raw.githubusercontent.com/seasonfif/github/master/icon/icon_192.png'} alt="GitHub" width='40px' />
                </a>
            </Button>
            <Button variant="outline-light">
                <a target="blank" href='https://www.linkedin.com/in/marcos-cruz-dev/' >                
                    <img src={'https://freepngimg.com/thumb/social_media/74290-icons-media-wallpaper-linkedin-desktop-computer-social.png'} alt="Linkedin" width='40px' />
                </a>
            </Button>
        </div>
    )
}