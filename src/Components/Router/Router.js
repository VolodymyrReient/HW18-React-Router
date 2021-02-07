import React from "react";
import { BrowserRouter as Router, NavLink, Route} from "react-router-dom";

import Main from "../Main/Main";
import MakePublication from "../Publication/makePublication";
import Photos from "../Photos/Photos";
import Contacts from "../Contact/Contacts"


const Navigation = () => {
    return (
        <div >
            <Router>
                <div className="navbar-wrapper">
                    <div className="navbar">
                    <NavLink className="link" to="main">Main</NavLink>
                    <NavLink className="link" to="publications">Publication</NavLink>
                    <NavLink className="link" to="photos">Photos</NavLink>
                    <NavLink className="link" to="contacts"> Contacts </NavLink>
                    </div>
                </div>
                <Route path="/main" component={Main} />
                <Route path="/publications" component={MakePublication} />
                <Route path="/photos" component={Photos} />
                <Route path="/contacts" component={Contacts} />
            </Router>
        </div>
    )

}

export default Navigation;