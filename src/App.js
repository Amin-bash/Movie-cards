import { Fragment } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme/light-theme";
import Home from "./pages/home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AppLayout } from "./components/layout";
import "./styles/global.css";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppLayout>
            <Home />
          </AppLayout>
        </ThemeProvider>
      </Provider>
    </Fragment>
  );
}

export default App;
