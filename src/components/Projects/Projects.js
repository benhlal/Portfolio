import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import clubhouse from "../../Assets/Projects/ch/clubhouse.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";

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
                            imgPath={clubhouse}
                            isBlog={false}
                            title="ClubHouse-clone"
                            description="Basic but beautiful recent clubhouse app clone built with react fire base hosting"
                            link="https://clubhouse-clone-c98b5.web.app/"
                            link="https://github.com/benhlal/ClubHouseProject"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={chatify}
                            isBlog={false}
                            title="Facebook Clone with Messenger"
                            description="A Facebook clone app build with react.js,Firebase. Have features which allows user for realtime messaging."
                            link="https://github.com/benhlal/facebook-clone"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={leaf}
                            isBlog={false}
                            title="Covid Tracker"
                            description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
                            link="https://github.com/benhlal/react-covid-tracker-with-vaccing"
                            link="https://covid-inffec-vacc-tracker.web.app/"
                        />
                    </Col>


                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={suicide}
                            isBlog={false}
                            title="TikTok-Clone"
                            description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
                            link="https://github.com/soumyajit4419/AI_For_Social_Good"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={emotion}
                            isBlog={false}
                            title="CoinBase-clone"
                            description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
                            link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
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
                            imgPath={algo}
                            link=""
                            title="Cracking Interview"
                            site="gitbook.com"
                        />
                    </Col>
                    <Col md={4} className="blog-card">
                        <BlogCard
                            imgPath={plant}
                            link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
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
