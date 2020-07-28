import React from 'react';
import {CreateMatrix} from "./CreateMatrix";
import {Matrix} from "./Matrix";
import {Route, Switch} from "react-router-dom";
import {Header} from "./Header";
import {Home} from "./Home";

const App = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/view/:uuid" component={Matrix}/>
                <Route path="/create" component={CreateMatrix}/>
            </Switch>
        </div>
    );
}

export default App;