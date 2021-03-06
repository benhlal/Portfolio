import React from "react";
import {Col, Row} from "react-bootstrap";
import {DiAndroid, DiGit, DiJava, DiJavascript1, DiMongodb, DiNodejs, DiPython, DiReact,} from "react-icons/di";
import {SiFirebase, SiPytorch, SiSpring, SiTensorflow} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>

            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiAndroid/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiJava/>
            </Col> <Col xs={4} md={2} className="tech-icons">
            <SiSpring/>
        </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTensorflow/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFirebase/>
            </Col>
        </Row>
    );
}

export default Techstack;
