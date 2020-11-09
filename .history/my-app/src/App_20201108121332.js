import "./App.css";
import IconNav from "./Components/IconNav";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <IconNav></IconNav>
    </ThemeProvider>
  );
}

export default App;
