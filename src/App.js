// Components
import MainHeader from "./components/layout/main-header/main-header.comp";
import MainNavbar from "./components/layout/main-navbar/main-navbar.comp";
import UpperHeader from "./components/utils/upper-header/upper-header.comp";

function App() {
  return (
    <div className="App">
      <UpperHeader />
      <MainHeader />
      <MainNavbar />
    </div>
  );
}

export default App;
