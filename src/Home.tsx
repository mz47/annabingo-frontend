import React from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <Container className="text-center">
            <h1 className="mt-5">Annabingo Annabongo</h1>
            <div>
                Click on <Link to="/create">Create</Link> to create a new Annabingo field with your own questions.<br/>
                After submitting your field, a link is generated to be shared with your friends.<br/>
                Enjoy playing Annabingo!
                <div><img className="mt-5" src="bingo-image-unsplash.jpg" alt="Annabingo Splash Image"/></div>
            </div>
        </Container>
    )
}

