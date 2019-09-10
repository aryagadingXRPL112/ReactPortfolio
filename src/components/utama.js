import React from 'react';
import { Switch, Route } from 'react-router-dom';
import landingpage from './landingpage';
import About from './tentangsaya';
import Contact from './kontak';
import Project from './projects';
import Resume from './resume';



const Main = () => (
    <Switch>
        <Route exact path="/" component={landingpage} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact}/>
        <Route path="/Project" component={Project} />
        <Route path="/Resume" component={Resume} />
    </Switch>
);

export default Main;