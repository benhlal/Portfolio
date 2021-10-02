import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./ProjectCards.css"
import {AiFillGithub} from "react-icons/ai";
import {GiMouse} from "react-icons/all";

function ProjectCards(props) {
    return (

        <Card className="project-card-view ">

            <div className={'cardContainer'}>
                <div className={'slideContainer'}>
                    <Carousel autoPlay
                              infiniteLoop
                              showStatus={false}
                              showIndicators={false}
                              showThumbs={false}
                              interval={4000}
                    >

                        {props.imgPath.map(link => (
                            <div className={'slide-div'}><Card.Img variant="top" src={link} alt="card-img"/></div>))}
                    </Carousel>
                </div>
                <div className={'cardBody'}>

                    <Card.Body>
                        <Card.Title style={{color: "#ff6700"}}>{props.title}</Card.Title>

                        <Card.Text
                            className={"description"}
                        >{props.description}
                        </Card.Text>
                    </Card.Body>

                </div>
                <div className={'cardBtnContainer'}>

                    <Button className={'cardBtn'} variant="primary" href={props.link} target="_blank">

                        {props.isBlog ? "View Blog" : "View Source "}
                        <AiFillGithub/>
                    </Button>
                    <Button className={'cardBtnDemo'} variant="primary" href={props.linkDemo} target="_blank">
                        {props.isBlog ? "View Blog" : "Wanna try  "}
                        <GiMouse/>
                    </Button>

                </div>

            </div>


        </Card>
    );
}

export default ProjectCards;
