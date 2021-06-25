import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/underConstruction.pdf";
import {AiOutlineDownload} from "react-icons/ai";

function Resume() {
    const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
    const [spojRank, upadteSpojRank] = useState(0);
    const [hackerrank, upadteHackerank] = useState(0);

    useEffect(() => {
        axios
            .get(uri)
            .then((res) => {
                upadteSpojRank(res.data.message[0].spojRank);
                upadteHackerank(res.data.message[1].hackerrank);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Container fluid className="resume-section">
            <Particle/>

            <h3 className="resume-title" style={{ color: 'red' }}>SORRY IT'S UNDER CONSTRUCTION</h3>
            <Container>
                <Row style={{justifyContent: "center", position: "relative"}}>
                    <Button variant="primary" href={pdf} target="_blank">
                        <AiOutlineDownload/>
                        &nbsp;Download CV
                    </Button>
                </Row>
                <Row className="resume">
                    <Col md={6} className="resume-left">
                        <h3 className="resume-title">Experience</h3>
                        <Resumecontent
                            title="Technical Lead & ScrumMaster"
                            date="June 2020 - August 2020"
                            content={[
                                "Personal Statement\n" +
                                "Multi-skilled IT professional with solid background at : Programming ,Requirements Development and management.\n" +
                                "Recognised by finding creative ingenious and efficient solutions to different situations.\n" +
                                "I always seek for challenging positions that allow me to capitalize all acquired analysis and technical skills.\n" +
                                "Proven ability to accomplish missions at time and with the highest quality possible,\n" +
                                "Quick learner.\n" +
                                "SKILLS\n" +
                                "Management :\n" +
                                "Taking advantage from being a Team-lead backup and managing a team of 8 persons\n" +
                                "which allowed me to :\n" +
                                "Develop communication skills that help you \"connect\" with team members\n" +
                                "Learn how to maintain personal and professional balance in order to remain a leader while still being part of the team.\n" +
                                "Dispatching and assigning tasks, establishing timelines and priorities within the team.\n" +
                                "Intervene when necessary to aid the group in resolving issues.",
                            ]}
                        />
                        <h3 className="resume-title">Extracurricular Activities</h3>
                        <Resumecontent
                            title="Software Engineer [Apr 2016 – Oct 2017 (1 yr 7 months)]"
                            content={[
                                "Actually I'm working on EMMA project built to help Greenway users to optimize the fleet planning, Europcar need a fine-grained vehicle planning with rich data visualization and with the possibility to assign a vehicle to a reservation. The project has to be delivered in a first phase for Finland and Norway.",
                            ]}
                        />
                        <Resumecontent
                            title="Software Engineer [Nov 2014 – Apr 2016]"
                            content={[
                                "-Team lead backup team of 8 persons.\n" +
                                "-EAI development (webMethods).\n" +
                                "-Service Flow development and maintenance.\n" +
                                "-Incident analysis and client's support.\n" +
                                "-New requirements analysis ,coding estimates,design and implementation.\n" +
                                "-Bugs/defects, issues tracking and fixing.\n" +
                                "-Delivery responsible .\n" +
                                "--Mastery of 3 key scopes of the project:\n" +
                                ">Billing management (relèves).\n" +
                                ">Managing Interventions reports[compte rendus d'interventions (C.R.I) ] life-cycle throw the business process until their integration into SAP's system.\n" +
                                ">the main component in the project Exchange (webmethods,PLSQL procedures and adaptation module) that links all components(internal and external ones ) together and manages all flows orchestration.\n" +
                                "-Coaching new recruits (Morocco && France).",
                            ]}
                        />
                    </Col>
                    <Col md={6} className="resume-right">
                        <h3 className="resume-title">Education</h3>
                        <Resumecontent
                            title="Master's degree "
                            date="2012 - 2014"
                            content={["Software Quality"]}
                        />
                        <Resumecontent
                            title="Bachelor's degree"
                            date="2009 - 2012"
                            content={["Information Systems Engineering"]}
                        />
                        <Resumecontent
                            title="Two-year University degree ( D.E.U.G ) "
                            date="2009 - 2011"
                            content={["Mathematics and Informatics"]}
                        />
                        <h3 className="resume-title">Ranks and Achivements</h3>
                        <Resumecontent
                            title=""
                            content={[
                                `Current rank in Spoj ${spojRank}`,
                                `Current rank in HackerRank  ${hackerrank}`,
                                "Top Performer in Code-Break 1.0",
                                "Participant in Hack-A-Bit 2019",
                            ]}
                        />
                    </Col>
                </Row>
                <Row style={{justifyContent: "center", position: "relative"}}>
                    <Button variant="primary" href={pdf} target="_blank">
                        <AiOutlineDownload/>&nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </Container>
    );
}

export default Resume;
