import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
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
                            description="Basic but beautiful recent clubhouse app clone built with react fire base hosting"
                            link="https://github.com/benhlal/ClubHouseProject"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={slideImages.amz}
                            isBlog={false}
                            title="<Amazon Clone/>"
                            description="Basic but beautiful recent clubhouse app clone built with react fire base hosting
                            Basic but beautiful recent clubhouse app clone built with react fire base hosting
                            Basic but beautiful recent clubhouse app clone built with react fire base hosting"
                            link="https://github.com/benhlal/Amazon-clone-NextJs"
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
                        />
                    </Col>


                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={slideImages.linkedin}
                            isBlog={false}
                            title="<Linkedin Clone/>"
                            description="I created a Tracker using React.js.
                             I added some features more than shown in the video.
                             Here I will describe how to create a tracking application using React application from scratch.
                              Here is the demo of that React application."
                            link="https://github.com/benhlal/linkedin-clone"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={slideImages.fb}
                            isBlog={false}
                            title="<Facebook Clone/>"
                            description="I created a Tracker using React.js.
                             I added some features more than shown in the video."
                            link="https://github.com/benhlal/facebook-clone"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={slideImages.yt}
                            isBlog={false}
                            title="<Youtube Clone/>"
                            description="I created a Tracker using React.js.
                             I added some features more than shown in the video.
                             Here I will describe how to create a tracking application using React application from scratch.
                              Here is the demo of that React application."
                            link="https://github.com/benhlal/youtube-clone"
                        />
                    </Col>
                </Row>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Blog </strong> Posts
                </h1>
                <p style={{color: "white"}}>Do give a read to some of my blogs</p>
                <Row style={{justifyContent: "center"}}>
                    <Col md={4} className="blog-card">
                        <BlogCard
                            imgPath={slideImages.ch}
                            title="Cracking Interview"
                            site=""
                        />
                    </Col>
                    <Col md={4} className="blog-card">
                        <BlogCard
                            imgPath={slideImages.ch}
                            link=""
                            title="Plant AI"
                            site="medium.com"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
