import React from "react";

function ResumeContentPS(props) {
    return (
        <div>
            <h5 className={props.title ? "resume-title" : "resume-no-title"}>
                {props.title}
            </h5>
            <p>
                <em>{props.date}</em>
            </p>
            <p >
                {props.content}
            </p>
        </div>
    );
}

export default ResumeContentPS;
