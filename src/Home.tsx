import React from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <Container className="text-center">
            <h1 className="mt-5">Annabingo Annabongo</h1>
            <div>
                Klicke auf <Link to="/create">Create</Link> um ein neues Annabingo anzulegen mit deinen eigenen Aussagen.<br/>
                Nach dem erfolgreichen Anlegen, wird ein Link generiert den du mit deinen Freunden teilen kannst.<br/>
                Enjoy Annabingo!
                <div><img className="mt-5" src="bingo-image-unsplash.jpg" alt="Annabingo Splash Image"/></div>
            </div>
        </Container>
    )
}

