import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import ResumeContent from "./ResumeContent";
import pdf from "../../Assets/Youness_BENHLAL.pdf";
import {AiOutlineDownload} from "react-icons/ai";
import ReactCountryFlag from "react-country-flag";
import ResumeContentPS from "./ResumeContentPersonalStatement";

function Resume() {


    return (
        <Container fluid className="resume-section">
            <Particle/>

            <Container>
                <Row style={{justifyContent: "center", position: "relative"}}>
                    <Button variant="primary" href={pdf} target="_blank">
                        <AiOutlineDownload/>
                        &nbsp;Download CV
                    </Button>
                    <ReactCountryFlag className="downCV"
                                      countryCode="FR"
                                      svg
                                      cdnSuffix="svg"
                                      title="US"
                    />
                    <Button variant="primary" href={pdf} target="_blank">
                        <AiOutlineDownload/>
                        &nbsp;Download CV
                    </Button>

                    <ReactCountryFlag
                        countryCode="GB"
                        svg
                        cdnSuffix="svg"
                        title="US"
                    />

                </Row>
                <Row className="resume">
                    <ResumeContentPS
                        title="Personal Statement"
                        content={[
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
                    <Col md={6} className="resume-left">
                        <h3 className="resume-title">Experience</h3>
                        <ResumeContent
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
                        <ResumeContent
                            title="Software Engineer [Apr 2016 – Oct 2017 (1 yr 7 months)]"
                            content={[
                                "Actually I'm working on EMMA project built to help Greenway users to optimize the fleet planning, Europcar need a fine-grained vehicle planning with rich data visualization and with the possibility to assign a vehicle to a reservation. The project has to be delivered in a first phase for Finland and Norway.",
                            ]}
                        />
                        <ResumeContent
                            title="Software Engineer [Nov 2014 – Apr 2016]"
                            content={[
                                "Team lead backup team of 8 persons." ,"EAI development (webMethods).\n" ,
                                "Service Flow development and maintenance.\n" ,
                                "Incident analysis and client's support.\n" ,
                                "New requirements analysis ,coding estimates,design and implementation.\n" ,
                                "Bugs/defects, issues tracking and fixing.\n" ,
                                "Delivery responsible .\n",
                                "Mastery of 3 key scopes of the project:\n" ,
                                "  >Billing management (relèves).\n" ,
                                "  >Managing Interventions reports[compte rendus d'interventions (C.R.I) ] lifecycle throw the business process until their integration into SAP's system.\n" ,
                                "  >the main component in the project Exchange (webmethods,PLSQL procedures and adaptation module) that links all components(internal and external ones ) together and manages all flows orchestration.\n",
                                "Coaching new recruits (Morocco && France).",
                            ]}
                        />
                    </Col>
                    <Col md={6} className="resume-right">
                        <h3 className="resume-title">Education</h3>
                        <ResumeContent
                            title="Master's degree "
                            date="2012 - 2014"
                            content={["Software Engineering"]}

                        />
                        <ResumeContent
                            title="Bachelor's degree"
                            date="2009 - 2012"
                            content={["Information Systems Engineering"]}
                        />
                        <ResumeContent
                            title="High school diploma"
                            date="2009"
                            content={["Mathematics & Engineering science"]}
                        />


                        <h3 className="resume-title">Skills</h3>
                        <ResumeContent
                            title="Programming Languages"
                            content={["JAVA, C/C++, Python"]}
                        />
                        <ResumeContent
                            title="Web & Mobile Technologies"
                            content={["JEE, Web-Services(SOAP/RESTful), Android, VR, Unity3D, firebase,CSS, tailwind, bootstrap,ReactNative"]}
                        />
                        <ResumeContent
                            title="Tools & Frameworks"
                            content={["Angular, React, Express, NodeJS, Spring(boot/batch/\n" +
                            "integration/MVC), Hibernate, JPA, Maven/Gradle, Jenkins\n" +
                            "SVN/GIT, Appdynamics/JMX, PMD/Checkstyle, SONAR, JIRA,\n" +
                            "HPALM, QisKit, UML, Swagger, Redux."]}
                        />
                        <ResumeContent
                            title="Project Management"
                            content={["Scrum, LEAN management, CMMI/CMMI-DEV, ISO 9001(v2008)\n" +
                            "PMP -PMBOK 6th,Extreme Programming"]}
                        />   <ResumeContent
                            title="DataBase & Servers"
                            content={["WebLogic, JBoss, Tomcat, IIS, glassfish, Apache, Oracle, MySQL,H2, PostgreSQL. "]}
                        />   <ResumeContent
                            title="EAI Development"
                            content={["Webmethods ,OSB(oracle service bus)\n"]}
                        />
                    </Col>


                </Row>

            </Container>
        </Container>
    );
}

export default Resume;
