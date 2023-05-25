import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import ProtectedRoute from "./ProtectRoute";
import Home from "./Routes/HomeRoute";
import TrendingRoute from "./Routes/TrendingRoute";
import GamingRoute from "./Routes/GamingRoute";
import SavedVideoRoute from "./Routes/SavedVideoRoute";

import NotFoundRoute from "./Routes/NotFoundRoute";
import NxtwatchProvider from "./Contexts/NxtwatchContextFunctionality";
import VideoDetailsRoute from "./Routes/VideoItemsDetailRoute";

const App: React.FC = () => {
  return (
    <NxtwatchProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/savedVideos"
            component={SavedVideoRoute}
          />
          <ProtectedRoute
            exact
            path="/Nxtwatch/video/:id"
            component={VideoDetailsRoute}
          />
          <Route path="/not-found" component={NotFoundRoute} />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </NxtwatchProvider>
  );
};

export default App;
