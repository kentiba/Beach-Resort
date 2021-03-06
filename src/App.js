import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import WithSpinner from "./components/withSpinner/withSpinner.component";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.component";
const HomePage = lazy(() => import("./pages/Home.component"));
const RoomsPage = lazy(() => import("./pages/Rooms.component"));
const SingleRoom = lazy(() => import("./pages/SingleRoom.component"));
const NotFoundPage = lazy(() => import("./pages/Not-found.component"));

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<WithSpinner />}>
        <Navbar />
        <Switch>
          <Route exact path="/beach-resort/" component={HomePage} />
          <Route exact path="/beach-resort/rooms" component={RoomsPage} />
          <Route
            exact
            path="/beach-resort/rooms/:slug"
            component={SingleRoom}
          />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
