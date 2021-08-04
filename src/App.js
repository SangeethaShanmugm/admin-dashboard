import "./styles.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./Users";
import UserCreate from "./UserCreate";
import UserEdit from "./UserEdit";
import { PageNotFound } from "./PageNotFound";
import Profile from "./Profile";
import ProfileEdit from "./ProfileEdit";

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div class="container-fluid">
              <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/UserCreate" component={UserCreate} exact={true} />
                <Route path="/Users" component={Users} exact={true} />
                <Route path="/Profile" component={Profile} exact={true} />
                <Route
                  path="/ProfileEdit/:id"
                  component={ProfileEdit}
                  exact={true}
                />
                <Route exact path="/UserEdit/:id" component={UserEdit} />
                <Route path="/*">
                  <PageNotFound />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
