import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import slideImages from "../../Assets/Projects/slideImages.json";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{color: "white"}}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={slideImages.ch}
                            isBlog={false}
                            title="<ClubHouse Clone/>"
                            description="Basic but beautiful recent clubhouse app clone built with react & Styled Components, firebase hosting. (ps. clubhouse of course has ongoing new features)"
                            link="https://github.com/benhlal/ClubHouseProject"
                            linkDemo="https://bit.ly/2UhTZVy"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={slideImages.amz}
                            isBlog={false}
                            title="<Amazon Clone/>"
                            description="Amazon look-alike application that simulates passing an order on amazon from adding products to basket to payment and orders summary, built with ReactJs, firebase, NextJs, Stripe, TailwindCSS."
                            link="https://github.com/benhlal/Amazon-clone-NextJs"
                            linkDemo="https://quantalgorithmes.com/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={slideImages.covid}
                            isBlog={false}
                            title="<Covid Tracker/>"
                            description="
                             I created a Tracker using React.js.
                             I added some features more than shown in the video.
                             Here I will describe how to create a tracking application using React application from scratch.
                              Here is the demo of that React application."
                            link="https://github.com/benhlal/react-covid-tracker-with-vaccing"
                            linkDemo="https://covid-inffec-vacc-tracker.web.app/"
                        />
                    </Col>


                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={slideImages.linkedin}
                            isBlog={false}
                            title="<Linkedin Clone/>"
                            description="Application built based on new linkedin design built with ReactJs (with Redux & firebase)."
                            link="https://github.com/benhlal/linkedin-clone"
                            linkDemo="https://bit.ly/3CId58G"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={slideImages.fb}
                            isBlog={false}
                            title="<Facebook Clone/>"
                            description="Same here with Facebook-clone with Messenger embedded , it allows you to Sign-in through google authentication, post text and images, comment,  built with react"
                            link="https://github.com/benhlal/facebook-clone"
                            linkDemo="https://facebook-2870e.web.app/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={slideImages.uber}
                            isBlog={false}
                            title="<UberClone/>"
                            description="Simple Uber application clone built using ReactNative"
                            link="https://github.com/benhlal/UberClone"
                            linkDemo="https://expo.dev/@benhlal/UberClone"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={slideImages.yt}
                            isBlog={false}
                            title="<Youtube Clone/>"
                            description="One of my first builds with ReactsJs ."
                            link="https://github.com/benhlal/youtube-clone"
                            linkDemo="https://bit.ly/2Xju54T"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
