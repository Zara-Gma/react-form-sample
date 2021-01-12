import React from "react";
import {
  BrowserRouter as Router, Route, Switch, Link,
  useLocation
} from "react-router-dom";
import { Step1 } from "./memberForm/Step1";
import { Step2 } from "./memberForm/Step2";
import { Step3 } from "./memberForm/Step3";
import { Step4 } from './memberForm/Step4';
import { Step5 } from './memberForm/Step5';
import { Step6 } from './memberForm/Step6';
import { Result } from "./memberForm/Result";
import { Header } from "./components/Header";

const Pages = () => {
  const location = useLocation();
  return (
    <>
      <nav className="container">
        <ul className="steps">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Step 1</Link>
          </li>
          <li className={location.pathname === "/step2" ? "active" : ""}>
            <Link to="/step2">Step 2</Link>
          </li>
          <li className={location.pathname === "/step3" ? "active" : ""}>
            <Link to="/step3">Step 3</Link>
          </li>
          <li className={location.pathname === "/step4" ? "active" : ""}>
            <Link to="/step4">Step 4</Link>
          </li>
          <li className={location.pathname === "/step5" ? "active" : ""}>
            <Link to="/step5">Step 5</Link>
          </li>
          <li className={location.pathname === "/step6" ? "active" : ""}>
            <Link to="/step6">Step 6</Link>
          </li>
          <li className={location.pathname === "/result" ? "active" : ""}>
            <Link to="/result">Result</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Step1} />
      <Route path="/step2" component={Step2} />
      <Route path="/step3" component={Step3} />
      <Route path="/step4" component={Step4} />
      <Route path="/step5" component={Step5} />
      <Route path="/step6" component={Step6} />
      <Route path="/result" component={Result} />
    </>
  );
};

function App() {
  return (
    <>
      <Header />
      <Router>
        <Pages />
        {/* <Switch>
          <Route exact path="/" component={Step1} />
          <Route path="/step2" component={Step2} />
          <Route path="/step3" component={Step3} />
          <Route path="/result" component={Result} />
        </Switch> */}
      </Router>
    </>
  );
}

export default App;
