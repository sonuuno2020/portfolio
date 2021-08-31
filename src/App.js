import React from "react";

import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/aboutpage/aboutpage.component";
import ContactPage from "./pages/contact/contact.component";
import ProjectPage from "./pages/project/project.component";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/project" component={ProjectPage} />
        <Route exact path="/portfolio" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
