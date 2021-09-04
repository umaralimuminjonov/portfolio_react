import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Page from "./components/Page";
import Login from "./components/main/auth/Login";
import NotFound from "./components/main/notFound/NotFound";
import { useTranslation } from "react-i18next";
import { Switch, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useTranslation();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Page} />

          <Route path="/login" exact component={Login} />

          <Route path="*" exact component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
