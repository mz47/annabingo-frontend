import React from 'react';
import {CreateMatrix} from "./CreateMatrix";
import {Matrix} from "./Matrix";
import {Route, Switch} from "react-router-dom";
import {Header} from "./Header";
import {Home} from "./Home";
import {SearchBingo} from "./SearchBingo";

const App = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/view/:uuid" component={Matrix}/>
                <Route path="/create" component={CreateMatrix}/>
                <Route path="/search" component={SearchBingo}/>
            </Switch>
        </div>
    );
}

export default App;