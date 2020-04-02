/*eslint-disable */
import React, { Suspense } from "react";
import "./App.css";
import { Header } from "./components/ToolBar/Toolbar";
import TableContainer from "./components/Table/TableContainer";
import { Route, Switch } from "react-router-dom";
import { Preloader } from "./components/Preloader/Preloader";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const NotFoundPage = React.lazy(() =>

  import("./components/NotFoundPage/NotFound")
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff8e53"
    },
    secondary: {
      main: "#fe6b8b"
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
              <Suspense fallback={<Preloader />}>
                <NotFoundPage />
              </Suspense>
            );
          }}
        />
      </Switch>
    </ThemeProvider>
  );
};

const TableApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App></App>
      </Provider>
    </BrowserRouter>
  );
};

export default TableApp;
