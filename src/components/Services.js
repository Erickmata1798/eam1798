import React from 'react';
import imagen from '../images/section4-image.png';
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Services = () => {
    return (
        <div className="Services__container">
            <img src={imagen} alt="Imagen" className="services__imagen"></img>
            <div className="services__accordion">
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Sed ut perspiciatis
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy<br />
                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam<br />
                                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita<br />
                                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Ut enim ad minima veniam
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy<br />
                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam<br />
                                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita<br />
                                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                        Sit amet, consectetur, adipisci
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="2">
                            <Card.Body>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy<br />
                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam<br />
                                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita<br />
                                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>
            </div>
            
        </div>

    );
}

export default Services;
