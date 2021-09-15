import React from 'react';
import imagen from '../images/section4-image.png';
import { Accordion} from 'react-bootstrap';

const Services = () => {
    return (
        <div className="Services__container">
            <img src={imagen} alt="Imagen" className="services__imagen"></img>
            <div className="services__accordion">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Sed ut perspiciatis</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy<br/> 
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam<br/>
                         voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita<br/> 
                         kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Ut enim ad minima veniam</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Sit amet, consectetur, adipisci</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </div>

    );
}

export default Services;
