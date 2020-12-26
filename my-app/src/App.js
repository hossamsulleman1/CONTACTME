import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import MainPage from './Components/MainPage'
import './Css/Fonts.css'
import './Css/CssCustom.css'
import './Css/Card.css'

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
<MainPage></MainPage>
    </ThemeProvider>
  );
}

export default App;
