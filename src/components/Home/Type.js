import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "FullStack Developer",
                    "Scrum Master",
                    "Quantum Computing junior",
                    "Deep Learning Engineer",
                    "PMP Certificate Candidate",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
