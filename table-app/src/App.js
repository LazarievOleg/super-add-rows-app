import React, { Suspense } from "react";
import "./App.css";
import { Header } from "./components/ToolBar/Toolbar";
import TableContainer from "./components/Table/TableContainer";
import { Route, Switch } from "react-router-dom";
import { Preloader } from "./components/Preloader/Preloader";

const NotFoundPage = React.lazy(() =>
  import("./components/NotFoundPage/NotFound")
);

function App() {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Header />
              <TableContainer />
            </>
          )}
        />
        <Route
          render={() => {
            return (
              <Suspense fallback={ <Preloader/>}>
                <NotFoundPage/>
              </Suspense>
            );
          }}
        />
      </Switch>
    </>
  );
}

export default App;
