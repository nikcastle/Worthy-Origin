import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import FarmersMarkets from "./pages/FarmersMarkets";
import Facts from "./pages/Facts";
import User from "./pages/User";
import NoMatch from "./pages/NoMatch";
import history from "./utils/history";

const App = () => {

  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
            
          <Route exact path="/farmers-markets" component={FarmersMarkets} />
            
          <Route exact path="/facts" component={Facts} />
           
          <Route exact path="/user" component={User} />

          <Route component={NoMatch}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
